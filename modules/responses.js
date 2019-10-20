class Responses {
    static ErrorCodes (code) {
        let errors = {
            101: "Auth failed!",
            102: "SQL Error!",
            103: "Auth required!"
        };
        return errors[code];
    }
    static Error (code, debug={}){
        return {type: 'error', text: Responses.ErrorCodes(code), code: code, debug: debug};
    }
    static Success (data) {
        return {type: 'success', data: data};
    }
}

module.exports = Responses;