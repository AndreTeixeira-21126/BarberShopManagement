const Barber = require("../db/barber.js");
const LoginUser = require("../db/loginUser.js");

exports.RegisterBarber_post = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a barber
  const barber = new Barber(req.body.name,req.body.phone);
  const login = new LoginUser(req.body.email,req.body.pass,null,1);

  // Save barber in the database
  Barber.RegisterBarber(barber,login, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Barber."
      });
    else {
        res.send(data);
        //res.redirect("/");
      }
  });
};


exports.GetBarberAllDetails_get = (req, res) => {

  Barber.GetBarberAllDetails((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Barber."
      });
    else res.send(data);
  });
};