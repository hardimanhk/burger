var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", async function (req, res) {
    var allObject = await burger.all();
    console.log(allObject);
    res.render("index", {burgers: allObject});
});

router.post("/api/burgers", async function (req, res) {
    var result = await burger.insert(req.body.burger_name, req.body.devoured);
    res.json({id: result.insertId});
});

router.put("/api/burgers/:id", async function (req, res) {
    var result = await burger.update(req.body.devoured, req.params.id);
    if (result.changedRows === 0) {
        return res.status(404).end();
    }
    res.status(200).end();
});

router.delete("api/burgers/:id", async function(req, res) {
    var result = await burger.delete(req.params.id);
    console.log(result);
    if (result.changedRows === 0){
        return res.status(404).end();
    }
    res.status(200).end();
});

module.exports = router;