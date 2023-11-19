var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");


router.post("/cadastrarFav", function (req, res) {
    favoritoController.cadastrarFav(req, res);
})

module.exports = router;