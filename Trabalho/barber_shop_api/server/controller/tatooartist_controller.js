const TatooArtist = require("../db/tatoo_artist.js");
const LoginUser = require("../db/loginUser.js");

exports.RegisterTattooArtist_post = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a TatooArtist
  const tatooArtist = new TatooArtist(req.body.name,req.body.phone);
  const login = new LoginUser(req.body.email,req.body.pass,null,1);
  // Save tatooArtist in the database
  TatooArtist.RegisterTattooArtist(tatooArtist,login, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TatooArtist."
      });
    else {
        res.send(data);
        //res.redirect("/");
      }
  });
};


exports.GetTatooArtistAllDetails_get = (req, res) => {

  TatooArtist.GetTatooArtistAllDetails((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TatooArtist."
      });
    else res.send(data);
  });
};