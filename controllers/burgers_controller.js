const express = require("express");
const db = require("../models");

const router = express.Router();

// Get
router.get("/", function (req, res) {
    db.burger.findAll({}).then(function (data) {
        var hbrs = {
            burgers: data
        };
        // console.log(hbrs);
        res.render("index", hbrs);
    });
});

// Post
router.post("/api/burgers", function (req, res) {
    // console.log(res);
    db.burger.create({ burger_name: req.body.burgerName }).then(function (result) {
        res.json({ id: result.insertId });
    });
    // burger.newBurger(req.body.burgerName, function(result) {
    //     res.json({id: result.insertId});
    // });
});

// Put
router.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id);
    console.log(req.body);
    db.burger.update(req.body,
        {
            where: { id: req.params.id }
        })
        .then(function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
    // burger.updateBurger(condition, function (result) {
    //     if (result.changedRows === 0) {
    //         return res.status(404).end();
    //     }
    //     else {
    //         res.status(200).end();
    //     }
    // });
});

module.exports = router;
// Next rung: server.js