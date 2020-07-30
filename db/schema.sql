DROP DATABASE IF EXISTS cmb8vgqqs7zag0kn;
CREATE DATABASE cmb8vgqqs7zag0kn;
USE cmb8vgqqs7zag0kn;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);
