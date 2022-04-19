const VipCustomer = require("../db/vipcustomer.js");
const LoginUser = require("../db/loginUser.js");

exports.RegistryVIPCustomer_post = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a VipCustomer
  const vipCustomer = new Barber(req.body.name,req.body.phone);
  const login = new LoginUser(req.body.email,req.body.pass,null,1);
  const pid = req.body.pid

  // Save VipCustomer in the database
  VipCustomer.RegistryVIPCustomer(vipCustomer,login,pid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the VipCustomer."
      });
    else {
        res.send(data);
        //res.redirect("/");
      }
  });
};


exports.GetVIPCustomersAllDetails_get = (req, res) => {

  VipCustomer.GetVIPCustomersAllDetails((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the VipCustomer."
      });
    else res.send(data);
  });
};

