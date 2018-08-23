var express = require("express");

var router = express.Router();

// Import the models
var db = require("../models/");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(burgers){
    res.render("index", {burgers : burgers});
  });
    
  });

router.post("/api/burgers", function(req, res) {
  console.log(req.body.burgerName);
  db.burgers.create({name : req.body.burgerName}).then(function(result){
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id
  db.burgers.update(
    {devoured : req.body.devoured},
    {where:{id : req.params.id}}).then(function(result){
      res.json(result);
    })
});

// Export routes for server.js to use.
module.exports = router;
