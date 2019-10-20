let router = global.express.Router("strict"),
    Tariffs = require('../modules/tariffs');

router.get('/', (req, res, next) => {
    global.Api.answer(res, Responses.Success());
});
module.exports = router;