var favoritoModel = require("../models/favoritoModel");

function cadastrarFav(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idUsuarioServer;
    var instrumento = req.body.instrumentoServer;
    var musica = req.body.musicaServer;
    var genero = req.body.generoServer;
    var artista = req.body.artistaServer;

    // Faça as validações dos valores
    if (instrumento == undefined) {
        res.status(400).send("Seu instrumento está undefined!");
    } else if (musica == undefined) {
        res.status(400).send("Sua música está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu gênero está undefined!");
    } else if (artista == undefined) {
        res.status(400).send("Seu artista está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        favoritoModel.cadastrarFav(id, instrumento, musica, genero, artista)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    // autenticar,
    cadastrarFav
}