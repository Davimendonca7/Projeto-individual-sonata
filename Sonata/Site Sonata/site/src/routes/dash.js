var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/dadosGraficos", function (req, res) {
    dashController.dadosGraficos(req, res);
})

router.post("/dadosGraficos2", function (req, res) {
    dashController.dadosGraficos2(req, res);
})

router.post("/dadosGraficos3", function (req, res) {
    dashController.dadosGraficos3(req, res);
})

router.post("/dadosGraficos4", function (req, res) {
    dashController.dadosGraficos4(req, res);
})



module.exports = router;