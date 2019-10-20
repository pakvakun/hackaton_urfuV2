const Hash = require('./hash');

class User {
    constructor(id){
        this.id = id;
    }

    async getData (id) {
        let data;
        await global.db.query(`SELECT * FROM users WHERE id = ?`, [id])
            .then((data) => {
                data = data;
            }, (reject) => {})
            .catch((err) => {});
        return data;
    }

    async changePassword (npassword) {
        let hash = Hash.md5(npassword),
            result;
        await global.db.query(`
            UPDATE security 
            SET pass = ? 
            WHERE id_user = ? `, [hash, this.id])
            .then(() => {result = 1}, (reject) => {console.log(reject);result = 0})
            .catch((err) => {result = 0;});
        return result;
    }

    async getPhones () {
        let phones;
        await db.query(`
            SELECT * 
            FROM phones
            JOIN tariffs ON phones.id_tariff
            WHERE id_user = ?
            `, [this.id])
            .then((data) => {
                phones = data.data;
            }, (rej) => { return 0});
        return phones;
    }

    static async auth (login, pass) {
        let hash = Hash.md5(pass),
            result;
        await global.db.query(`
            SELECT IF (security.pass = ?, users.id, 0) AS id
            FROM users 
            JOIN security ON users.id = security.id_user
            JOIN phones ON users.id = phones.id_user
            WHERE phones.phone = ?`, [hash,login])
            .then((data) => {
                if (!data || !data.data.id){
                    result = false;
                    return false;
                }

                result = data.data.id;
            }, (reject) => {result = false})
            .catch((err) => {result = false});
        return result;
    }
}

module.exports = User;