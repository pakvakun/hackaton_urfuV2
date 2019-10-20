let router = global.express.Router("strict"),
    User = require('../modules/user');

router.get('/', (req, res, next) => {
    global.Api.answer(res, Responses.Success());
});
module.exports = router;