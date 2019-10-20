class Tariffs {
    static async getData () {
        let data;
        await global.db.query(`SELECT * FROM tariffs`)
            .then((data) => {
                data = data;
            }, (reject) => {})
            .catch((err) => {});
        return data;
    }
}

module.exports = Tariffs;