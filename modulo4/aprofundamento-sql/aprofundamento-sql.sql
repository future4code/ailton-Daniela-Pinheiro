USE `ailton-daniela-pinheiro`;
SELECT * FROM Actor;
SET SQL_SAFE_UPDATES = 0;

-- 1
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- 2
UPDATE Actor SET name = "Moacyr Franco", birth_date = "1936-10-05" WHERE id = "003";
UPDATE Actor SET name = "Fernanda Montenegro", birth_date = "1929-10-19" WHERE id = "003";

UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

UPDATE Actor SET name = "Moacyr Franco", salary = 40000, birth_date = "1936-10-05", gender = "male" WHERE id = "005";

UPDATE Actor SET name = "Cláudia Raia" WHERE id = "015";

-- 3
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- 4
SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

-- 5
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

-- 6
ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE score score FLOAT;

UPDATE Movie SET playing_limit_date = "2022-09-10" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2022-01-30" WHERE id = "002";

DELETE FROM Movie WHERE id = "003";
UPDATE Movie SET description = "Sinopse do filme que não existe mais." WHERE id = "003";