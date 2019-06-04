const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Get
router.get("/", function(req, res) {
    burger.allBurgers(function(data) {
        var hbrs = {
            burgers: data
        };
        // console.log(hbrs);
        res.render("index", hbrs);
    });
});

// Post
router.post("/api/burgers", function(req, res) {
    // console.log(res);
    burger.newBurger(req.body.burgerName, function(result) {
        res.json({id: result.insertId});
    });
});

// Put
router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    var condition = {"id": parseInt(req.params.id)};
    // console.log(condition);
    burger.updateBurger(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else
        {
            res.status(200).end();
        }
    });
});

module.exports = router;
// Next rung: server.js