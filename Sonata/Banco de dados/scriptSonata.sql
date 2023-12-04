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
('Davi', 'davi@gmail.com', '4002'),
('ivan', 'ivan@gmail.com', 'davi'),
('Eduardo', 'eduardo@gmail.com', 'dudu'),
('felipe', 'felipe@gmail.com', 'fe234'),
('gustavo', 'gustavo@gmail.com', 'senha123'),
('lucas', 'lucas@gmail.com', 'luna222'),
('guilherme', 'guilherme@gmail.com', 'guiga'),
('pardinho', 'pardinho@gmail.com', 'melo54'),
('felipe', 'felipe@gmail.com', 'larapios'),
('maria', 'maria@gmail.com', 'dulce06'),
('bia', 'bia@gmail.com', 'leme112'),
('osvaldo', 'osvaldo@gmail.com', 'valdo553'),
('carlos', 'carlos@gmail.com', 'carlos74'),
('matheus', 'ttheuw@gmail.com', 'teteu67'),
('samira', 'samira@gmail.com', 'arabi656');

insert into detalhesUser values
(1, 'saxofone', 'Adagio', 'trap', 'veigh'),
(2, 'violão', 'Adagio', 'pop', 'Beethoven'),
(3, 'saxofone', 'Adagio', 'pop', 'justin bieber'),
(4, 'violão', 'A flauta magica', 'trap', 'veigh'),
(5, 'ukulele', 'labirinto', 'rap', 'veigh'),
(6, 'guitarra', 'A flauta magica', 'trap', 'Beethoven'),
(7, 'saxofone', '4° sinfonia de beethoven', 'clássica', 'veigh'),
(8, 'saxofone', '4° sinfonia de beethoven', 'trap', 'mozart'),
(9, 'saxofone', 'orações', 'trap', 'veigh'),
(10, 'violão', 'Adagio', 'rock', 'mozart'),
(11, 'ukulele', '4° sinfonia de beethoven', 'clássica', 'mozart'),
(12, 'guitarra', '4° sinfonia de beethoven', 'clássica', 'mozart'),
(13, 'violão', 'Adagio', 'clássica', 'Beethoven'),
(14, 'violão', 'Adagio', 'clássica', 'mozart'),
(15, 'ukulele', 'A flauta magica', 'classica', 'Beethoven');

select * from aviso;

select * from detalhesUser;

-- select instrumentoFav, count(fkUsuario) as totalInstrumento from usuario join detalhesUser on fkUsuario = id group by instrumentoFav;

-- select musicaFav, count(fkUsuario) as totalmusica from usuario join detalhesUser on fkUsuario = id group by musicaFav;
 
-- truncate table aviso;

-- truncate table usuario;

 -- drop database sonata;


