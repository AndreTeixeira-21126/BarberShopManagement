var router = require("express").Router();
    
router.get("/", (req, res) => {
  res.status(200).json({message: "Ainda não está implementada a página HTML"});
});

module.exports = router;