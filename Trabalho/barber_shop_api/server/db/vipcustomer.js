const sql = require("./index.js");

class VipCustomer 
{
    // constructor
    constructor(nif) {
        this.nif = nif;
    }

    static RegistryVIPCustomer(newVIPCustomer,newLogin, pid,result) {
        sql.query(`CALL RegistryVIPCustomer("${newLogin.email}","${newLogin.password}","${newVIPCustomer.nif}","${pid}")` , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created VIPCustomer");
        });
    }

    static GetVIPCustomersAllDetails(result) {
        let query = "call GetVIPCustomersAllDetails()";
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("VIPCustomer: ", res);
            result(null, res);
        });
    }
}


module.exports = VipCustomer;