DROP DATABASE IF EXISTS heroku_d17f969daa1a53a;
CREATE DATABASE heroku_d17f969daa1a53a;
USE heroku_d17f969daa1a53a;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);
