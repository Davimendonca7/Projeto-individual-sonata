var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarFav(id, instrumento, musica, genero, artista) {
    
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO detalhesUser (fkUsuario, instrumentoFav, musicaFav, generoFav, artistaFav) VALUES 
        ('${id}', '${instrumento}', '${musica}', '${genero}', '${artista}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    // autenticar,
    cadastrarFav
};