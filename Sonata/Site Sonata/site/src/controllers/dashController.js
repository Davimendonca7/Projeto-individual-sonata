var dashModel = require("../models/dashModel");

function dadosGraficos(req,res){

    dashModel.dadosGraficos().then(function (resultado) {
        res.json(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os instrumentos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosGraficos2(req,res){

    dashModel.dadosGraficos2().then(function (resultado) {
        res.json(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as musicas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosGraficos3(req,res){

    dashModel.dadosGraficos3().then(function (resultado) {
        res.json(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as musicas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosGraficos4(req,res){

    dashModel.dadosGraficos4().then(function (resultado) {
        res.json(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as musicas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
dadosGraficos,
dadosGraficos2,
dadosGraficos3,
dadosGraficos4
}