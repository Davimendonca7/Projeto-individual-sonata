/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

-- CREATE DATABASE sonata;

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

CREATE TABLE detalhesUser(
fkUsuario int primary key,
instrumentoFav varchar(50),
musicaFav varchar (50),
generoFav varchar (50),
artistaFav varchar (50),
foreign key (fkUsuario) references usuario(id));


-- SELECT id, nome, email FROM usuario WHERE email = 'davi.com' or nome = 'davi' AND senha = '222';

select * from usuario;

select * from aviso;

 -- delete from usuario where id = 2;
 
-- truncate table aviso;

-- truncate table usuario;

 -- drop database sonata;





