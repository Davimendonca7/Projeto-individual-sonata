var database = require("../database/config")

function dadosGraficos(){
    var instrucao = `
    SELECT instrumentoFav, COUNT(fkUsuario) AS totalInstrumento FROM usuario JOIN detalhesUser ON fkUsuario = id GROUP BY instrumentoFav;
    `
    return database.executar(instrucao);
}

function dadosGraficos2(){
    var instrucao = `
    SELECT musicaFav, COUNT(fkUsuario) AS totalmusica FROM usuario JOIN detalhesUser ON fkUsuario = id GROUP BY musicaFav;
    `
    return database.executar(instrucao);
}


function dadosGraficos3(){
    var instrucao = `
    SELECT generoFav, COUNT(fkUsuario) AS totalgenero FROM usuario JOIN detalhesUser ON fkUsuario = id GROUP BY generoFav;
    `
    return database.executar(instrucao);
}

function dadosGraficos4(){
    var instrucao = `
    SELECT artistaFav, COUNT(fkUsuario) AS totalartista FROM usuario JOIN detalhesUser ON fkUsuario = id GROUP BY artistaFav;
    `
    return database.executar(instrucao);
}

module.exports = {
    dadosGraficos,
    dadosGraficos2,
    dadosGraficos3,
    dadosGraficos4
};