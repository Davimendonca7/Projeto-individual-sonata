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

select * from usuario;

insert into usuario (nome, email, senha) values
('Eduardo', 'eduardo@gmail.com', 'dudu'),
('felipe', 'felipe@gmail.com', 'fe234'),
('gustavo', 'gustavo@gmail.com', 'senha123'),
('lucas', 'lucas@gmail.com', 'luna222'),
('guilherme', 'guilherme@gmail.com', 'guiga'),
('pardinho', 'pardinho@gmail.com', 'melo54'),
('felipe', 'felipe@gmail.com', 'larapios'),
('maria', 'maria@gmail.com', 'dulce06'),
('bia', 'bia@gmail.com', 'leme112'),
('samira', 'samira@gmail.com', 'arabi656');

insert into detalhesUser values
(3, 'saxofone', 'confident', 'pop', 'justin bieber'),
(4, 'violão', 'orações', 'trap', 'veigh'),
(5, 'ukulele', 'labirinto', 'rap', 'veigh'),
(6, 'guitarra', 'mil maneiras', 'trap', 'drake'),
(7, 'saxofone', 'orações', 'rock', 'veigh'),
(8, 'saxofone', 'orações', 'trap', 'mozart'),
(9, 'saxofone', 'orações', 'trap', 'veigh'),
(10, 'violão', 'confident', 'rock', 'mozart'),
(11, 'bateria', 'o melhor', 'sertanejo', 'mozart'),
(12, 'baixo', 'confident', 'classica', 'matue');

select * from aviso;

select * from detalhesUser;

-- select instrumentoFav, count(fkUsuario) as totalInstrumento from usuario join detalhesUser on fkUsuario = id group by instrumentoFav;

-- select musicaFav, count(fkUsuario) as totalmusica from usuario join detalhesUser on fkUsuario = id group by musicaFav;
 
-- truncate table aviso;

-- truncate table usuario;

 -- drop database sonata;


