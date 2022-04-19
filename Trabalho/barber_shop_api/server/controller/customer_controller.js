const Customer = require("../db/customer.js");

exports.RegisterCustomer_post = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer(req.body.nif,req.body.name);

  // Save Customer in the database
  Customer.RegisterCustomer(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else {
        res.send(data);
        //res.redirect("/");
      }
  });
};


exports.GetCustomers_get = (req, res) => {

  Customer.GetCustomers((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

exports.GetCustomersNamebyNif_get = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const nif = req.body.nif;
  Customer.GetCustomersNamebyNif(nif,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};