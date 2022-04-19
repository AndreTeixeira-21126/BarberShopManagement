const sql = require("./index.js");

class LoginUser{

    // constructor
    constructor(email,password,PhotoURL,UTId) {
        this.email = email;
        this.password = password;
        this.PhotoURL = PhotoURL;
        this.UTId = UTId;
    }
}

module.exports = LoginUser;