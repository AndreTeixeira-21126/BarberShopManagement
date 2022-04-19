const sql = require("./index.js");

class TatooArtist 
{
    // constructor
    constructor(name,phone) {
        this.name = name;
        this.phone = phone;
    }

    static RegisterTattooArtist(newTatooArtist,newLogin, result) {
        sql.query(`CALL RegisterTattooArtist("${newLogin.email}","${newLogin.password}","${newTatooArtist.name}","${newTatooArtist.phone}")` , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created Tatoo Artist");
            console.log(res);
        });
    }

    static GetTatooArtistAllDetails(result) {
        let query = "call GetTatooArtistAllDetails()";
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("Tatoo Artist: ", res);
            result(null, res);
        });
    }
}


module.exports = TatooArtist;