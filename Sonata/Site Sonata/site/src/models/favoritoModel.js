var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarFav(id, instrumento, musica, genero, artista) {
    var instrucao = `
        INSERT INTO detalhesUser (fkUsuario, instrumentoFav, musicaFav, generoFav, artistaFav) VALUES 
        ('${id}', '${instrumento}', '${musica}', '${genero}', '${artista}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function Dadosperfil(id){
    var instrucao = `
    SELECT u.email, u.senha, d.instrumentoFav, d.musicaFav, d.generoFav, d.artistaFav FROM usuario AS u 
	JOIN detalhesUser AS d ON id = fkUsuario WHERE id = ${id};
    `
    return database.executar(instrucao);
}

function atualizar( instrumento, musica, genero, artista, id) {
    var instrucao = `
    UPDATE detalhesUser SET instrumentoFav = '${instrumento}', musicaFav = '${musica}', generoFav = '${genero}', artistaFav = '${artista}' WHERE fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function atualizarUser(email, senha, id){
    var instrucao = `
    UPDATE usuario SET email = '${email}', senha = '${senha}' WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    Dadosperfil,
    cadastrarFav,
    atualizar,
    atualizarUser
};