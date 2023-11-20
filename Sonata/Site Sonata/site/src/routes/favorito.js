var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");


router.post("/cadastrarFav", function (req, res) {
    favoritoController.cadastrarFav(req, res);
})

router.post("/Dadosperfil", function (req, res) {
    favoritoController.Dadosperfil(req, res);
})

router.post("/atualizar", function (req, res) {
    favoritoController.atualizar(req, res);
})

module.exports = router;