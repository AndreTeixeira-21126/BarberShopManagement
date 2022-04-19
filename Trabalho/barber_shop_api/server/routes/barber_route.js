const barber = require("../controller/barber_controller.js");
var router = require("express").Router();
    

router.get("/", (req, res) => {
    res.status(200).json({message: "Ainda não está implementada a página HTML"});
});

//get all barbers
router.get("/all", barber.GetBarberAllDetails_get);


//post do create barber
router.post("/regist", barber.RegisterBarber_post);
    
  
module.exports = router;