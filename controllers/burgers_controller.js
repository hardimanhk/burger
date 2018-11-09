var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var allObject = {
            burgers: data
        };
        console.log(allObject);
        res.render("index", allObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insert(req.body.burger, req.body.devoured);
});

router.put("/api/burgers/:id", function(req, res){
    burger.update(req.body.burger, req.body.devoured, req.params.id);
});

module.exports = router;