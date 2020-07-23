// Dependencies
var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

// Create routes 
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    res.render("index", {
      burgers: data
    });
  });
});

router.post("/api/burgers", function(req, res) {
  if (!req.body.name) {
      req.body.name = "Bun + Patty" 
  }

  burgers.insertOne(
    "burger_name", 
    [req.body.name], 
    function(result) {
    res.redirect("/")
  });
});

router.get("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.updateOne({
    devoured: true
  }, condition, function(result) {
      res.redirect("/"); 
  });
});

// Export router.
module.exports = router;
