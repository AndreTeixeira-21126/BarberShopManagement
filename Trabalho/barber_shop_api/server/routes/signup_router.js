var router = require("express").Router();
//const signup = require("../controller/signup_controller.js");
    
router.get("/", (req,res) => {res.render("../views/signup");});
    
module.exports = router;