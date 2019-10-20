const Responses = require('./responses');

class DB {
    constructor(cfg){
        this.poolCfg = cfg;
        this.pool = require('mysql').createPool(this.poolCfg);
    }

    query(query, vals) {
        return new Promise((resolve, reject) => {
            this.pool.query(query, vals, (err, response) => {
                if (err) reject(Responses.Error(102, err));
                if (!response) response = [];
                response = response.length === 1 ? response[0] : response;
                resolve(Responses.Success(response));
            });
        });
    }
}

module.exports.DB = DB;