/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE sonata;

USE sonata;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
	);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


-- SELECT id, nome, email FROM usuario WHERE email = 'davi.com' or nome = 'davi' AND senha = '222';

-- select * from usuario;
 -- delete from usuario where id = 2;

 -- drop database sonata;



-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );

-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);


