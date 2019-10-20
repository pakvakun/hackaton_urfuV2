class Api{
    static answer (res, data=false, status=200) {
        res.end(JSON.stringify(data));
    }
}

module.exports = Api;
