CREATE DATABASE projeto_node;
USE projeto_node;

CREATE TABLE conteudo(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categoria varchar(8) NOT NULL,
    conteudo varchar(50) NOT NULL
);

