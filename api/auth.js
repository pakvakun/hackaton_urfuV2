let router = global.express.Router("strict"),
    User = require('../modules/user');


router.post('/', (req, res, next) => {
    let {login , password} = req.body;

    User.auth(login, password)
        .then((result) => {
            if (!result) {
                global.Api.answer(res, Responses.Error(101));
                return false;
            }
            req.session.userId = result;
            global.Api.answer(res, Responses.Success());

        }, () => {global.Api.answer(res, Responses.Error(101));});
});

/*Auth required*/
router.use((req, res, next) => {
    if (!req.session.userId){
        global.Api.answer(res, global.Responses.Error(104));
        return false;
    }

    next();
});

router.put('/', (req, res, next) => {
    let {login, password, npassword} = req.body;

    User.auth(login, password).then((id) => {
        let user = new User(id);

        user.changePassword(npassword)
            .then(() => {
                global.Api.answer(res, global.Responses.Success());
            }, (rej) => {
                global.Api.answer(res, Responses.Error(102))
            });

    }, () =>
    {
        global.Api.answer(res, Responses.Error(102));
    });
});

router.delete('/', (req, res, next) => {
    delete req.session.userId;
    global.Api.answer(res, global.Responses.Success());
});

module.exports = router;