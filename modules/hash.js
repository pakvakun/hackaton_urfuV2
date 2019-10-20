const crypto = require('crypto');

class Hash{
    static md5 (str) {
        return crypto.createHash('md5').update(String(str)).digest('hex');
    }
}

module.exports = Hash;