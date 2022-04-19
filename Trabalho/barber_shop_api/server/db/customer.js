const sql = require("./index.js");

class Customer 
{
    // constructor
    constructor(nif,name) {
        this.name = name;
        this.nif = nif;
    }

    static RegisterCustomer(newCustomer, result) {
        sql.query(`CALL RegisterCustomer("${newCustomer.nif}","${newCustomer.name}")` , (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created Customer");
        });
    }

    static GetCustomers(result) {
        let query = "call GetCustomers()";
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("Customer: ", res);
            result(null, res);
        });
    }

    static GetCustomersNamebyNif(nif,result) {
        let query = `call GetCustomersNamebyNif("${nif}")`;
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("Customer: ", res);
            result(null, res);
        });
    }
}


module.exports = Customer;