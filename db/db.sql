CREATE DATABASE company;
USE company;

CREATE TABLE employees(
	id INT(11) NOT NULL	AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
	PRIMARY KEY(id)
);

DESCRIBE employees;

SELECT * FROM employees;

INSERT INTO employees values
(1,'Ryan Ray',20000),
(2, 'Juan Bonino', 100000),
(3, 'Louis Armstrong', 40000);