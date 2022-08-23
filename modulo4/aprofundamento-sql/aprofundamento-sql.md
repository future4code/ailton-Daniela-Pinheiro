### Exercício 1
**a)** `ALTER TABLE Actor DROP COLUMN salary;`: Deleta as informações de salário da tabela.

**b)** `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`: Altera a propriedade *gender* para *sex*, que é uma string de até 6 caracteres.

**c)** `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`: Altera a propriedade *gender* para uma string de até 255 caracteres.

**d)** `ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

### Exercício 2
**a)** `UPDATE Actor SET name = "Moacyr Franco", birth_date = "1936-10-05" WHERE id = "003";`

**b)** `UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";`
`UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";`

**c)** `UPDATE Actor SET name = "Moacyr Franco", salary = 40000, birth_date = "1936-10-05", gender = "male" WHERE id = "005";`

**d)** Ao tentar rodar `UPDATE Actor SET name = "Cláudia Raia" WHERE id = "015";`, foi retornada uma mensagem de sucesso, porém nenhuma alteração foi feita à tabela: `0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0`

### Exercício 3
**a)** `DELETE FROM Actor WHERE name = "Fernanda Montenegro";`

**b)** `DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;`

### Exercício 4
**a)** `SELECT MAX(salary) FROM Actor;`

**b)** `SELECT MIN(salary) FROM Actor WHERE gender = "female";`

**c)** `SELECT COUNT(*) FROM Actor WHERE gender = "female";`

**d)** `SELECT SUM(salary) FROM Actor;`

### Exercício 5
**a)** `SELECT COUNT(*), gender FROM Actor GROUP BY gender;`: Retorna duas informações: *count(*)* e *gender*, onde segunda são os gêneros existentes na tabela (feminino e masculino) e a primeira são as quantidades de atores em cada uma dessas categorias. Essa divisão é feita pelo `GROUP BY`.

**b)** `SELECT id, name FROM Actor ORDER BY name DESC;`

**c)** `SELECT * FROM Actor ORDER BY salary;`

**d)** `SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;`

**e)** `SELECT AVG(salary), gender FROM Actor GROUP BY gender;`

### Exercício 6
**a)** `ALTER TABLE Movie ADD playing_limit_date DATE;`

**b)** `ALTER TABLE Movie CHANGE score score FLOAT;`

**c)**
```
UPDATE Movie SET playing_limit_date = "2022-09-10" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2022-01-30" WHERE id = "002";
```

**d)** `DELETE FROM Movie WHERE id = "003";`
`UPDATE Movie SET description = "Sinopse do filme que não existe mais." WHERE id = "003";` Retorna uma mensagem de sucesso, porém com 0 alterações à tabela: `0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0`. Como não havia problemas na sintaxe, o comando roda e tenta encontrar na tabela o item especificado, mas por não encontrá-lo, nada é alterado.

### Exercício 7
**a)** `SELECT COUNT(*) FROM Movie WHERE score > 7.5;`

**b)** `SELECT AVG(score) FROM Movie;`

**c)** `SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();`

**d)** `SELECT COUNT(*) FROM Movie WHERE premiere_date > CURDATE();`

**e)** `SELECT MAX(score) FROM Movie;`

**f)** `SELECT MIN(score) FROM Movie;`

### Exercício 8
**a)** `SELECT * FROM Movie ORDER BY name ASC;`

**b)** `SELECT * FROM Movie ORDER BY name DESC LIMIT 5;`

**c)**
```
SELECT * FROM Movie
WHERE premiere_date < CURDATE() AND playing_limit_date > CURDATE()
ORDER BY premiere_date DESC LIMIT 3;
```

**d)** `SELECT * FROM Movie ORDER BY score DESC LIMIT 3;`