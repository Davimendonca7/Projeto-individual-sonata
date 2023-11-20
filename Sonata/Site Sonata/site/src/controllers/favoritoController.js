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

function Dadosperfil(req, res) {
    var id = req.body.idUsuarioServer;

    favoritoModel.Dadosperfil(id)
    .then(
        function (resultado) {
            res.json({
                email : resultado[0].email,
                senha : resultado[0].senha,
                instrumento : resultado[0].instrumentoFav, 
                musica : resultado[0].musicaFav, 
                genero : resultado[0].generoFav, 
                artista : resultado[0].artistaFav, 
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar enviar id! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );

    favoritoModel.Dadosperfil().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os Dados favoritos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

    function atualizar(req, res){
        var email = req.body.emailServer;
        var senha = req.body.senhaServer;
        var instrumento = req.body.instrumentoServer;
        var musica = req.body.musicaServer;
        var genero = req.body.generoServer;
        var artista = req.body.artistaServer;
        var id = req.body.idServer;
        
        // Faça as validações dos valores
        if (email == undefined) {
            res.status(400).send("Seu email está undefined!");
        } else if (senha == undefined) {
            res.status(400).send("Sua senha está undefined!");
        } else if (instrumento == undefined) {
            res.status(400).send("Seu instrumento está undefined!");
        } else if (musica == undefined) {
            res.status(400).send("Sua música está undefined!");
        } else if (genero == undefined) {
            res.status(400).send("Seu gênero está undefined!");
        } else if (artista == undefined) {
            res.status(400).send("Seu artista está undefined!");
        }  else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            favoritoModel.atualizar(instrumento, musica, genero, artista, id),
            favoritoModel.atualizarUser(email, senha, id)
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
    Dadosperfil,
    cadastrarFav,
    atualizar
}