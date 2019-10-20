let router = global.express.Router("strict"),
    User = require('../modules/user');

/*Auth required*/
router.use((req, res, next) => {
    if (!req.session.userId){
        global.Api.answer(res, global.Responses.Error(104));
        return false;
    }

    next();
});

router.get('/', (req, res, next) => {
    let user = new User(req.session.userId);
    user.getPhones()
        .then((phones) => {
            Api.answer(res, Responses.Success(phones));
        }, (rej) => {
            Api.answer(res, Responses.Error(103));
        });
});

module.exports = router;