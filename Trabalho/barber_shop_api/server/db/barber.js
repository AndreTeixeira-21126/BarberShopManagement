const sql = require("./index.js");

class Barber 
{
    // constructor
    constructor(name,phone) {
        this.name = name;
        this.phone = phone;
    }

    // nao usar objetos, mas sim strings
    static RegisterBarber(newBarber,newLogin, result) {
        sql.query(`CALL RegisterBarber("${newLogin.email}","${newLogin.password}","${newBarber.name}","${newBarber.phone}")` , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created barber");
        });
    }

    static GetBarberAllDetails(result) {
        let query = "call GetBarberAllDetails()";
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("barber: ", res);
            result(null, res);
        });
    }
}


module.exports = Barber;