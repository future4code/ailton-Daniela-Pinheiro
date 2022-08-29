#### Exercício 1
**a)**
`CREATE TABLE` cria uma tabela com o nome *Actor*, que possui as seguintes informações: *id*, *name*, *salary*, *birth_date* e *gender*.
`VARCHAR(255)` serve para criar uma variável de tipo *string* que pode conter até 255 caracteres, enquanto `VARCHAR(6)` cria uma *string( de até 6 caracteres.
`PRIMARY KEY` atribui à variável *id* a condição de chave primária.
`DATE` cria uma variável do tipo data.
`NOT NULL` serve para explicitar quando uma informação é obrigatória.

**b)**
`SHOW DATABASES` retorna a lista de bancos de dados cadastrados.
`SHOW TABLES` retorna as tabelas existentes nesses bancos de dados.

**c)**
`DESCRIBE Actor` retorna as especificações das informações dessa tabela, como os nomes das variaveis, seus tipos, o que elas contém, qual é a chave primária.

#### Exercício 2
**a)**
```
INSERT INTO Actor VALUES(
	"002",
	"Glória Pires",
	1200000,
	"1963-08-23",
	"female"
);
```
**b)**
`Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'`: não permite adicionar mais de um elemento com a mesma chava primária.

**c)**
`Error Code: 1136. Column count doesn't match value count at row 1`: a quantidade de dados a serem inseridos difere da quantidade especificada, é necessário acrescentar *birth_date* e *gender*.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
**d)**
`Error Code: 1364. Field 'name' doesn't have a default value`: o valor de *name* não foi passado, e não pode ser nulo.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

**e)**
`Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1`: a data não foi passada corretamente, deveria estar entre parênteses.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

**f)**
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Taís Araújo",
  200000,
  "1978-11-25", 
  "female"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Lázaro Ramos",
  270000,
  "1978-11-01", 
  "male"
);
```

#### Exercício 3
**a)** `SELECT * from Actor WHERE gender = "female";`

**b)** `SELECT salary from Actor WHERE name = "Tony Ramos";`

**c)** `SELECT * from Actor WHERE gender = "invalid";` Como *gender* possui apenas opções *male* e *female*, essa *query* retorna uma linha nula.

**d)** `SELECT id, name, salary from Actor WHERE salary < 500000;`

**e)** `Error Code: 1054. Unknown column 'nome' in 'field list'`: *nome* não é uma informação existente na tabela, o correto seria *name*.
`SELECT id, name from Actor WHERE id = "002";`

#### Exercício 4
**a)** `SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000`
Há duas condições principais acima, que devem ser verdadeiras ao mesmo tempo, pois estão separadas por `AND`: `name LIKE "A%" OR name LIKE "J%"` e `salary > 300000`. Esta determina que o salário deve ser maior do que 300.000. Já a primeira é composta por duas condições, e pelo menos uma delas deve ser verdadeira, pois estão separadas por `OR`: `name LIKE "A%"` ou `name LIKE "J%"`. `LIKE` é usado para verificar se uma string contém certa informação, que, no caso, seria `"A%"` ou `J%"`. O símbolo *%* serve para significar uma string qualquer, logo, as condições acima são traduzidas para: *name* deve conter "A" como primeiro caractere ou *name* deve conter "J" como primeiro caractere.

**b)**`SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;`

**c)**`SELECT * from Actor WHERE name LIKE "%G%" OR name LIKE "%g%";`

**d)**`SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;`

#### Exercício 5
**a)**
```
CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
premiere_date DATE NOT NULL,
score TINYINT NOT NULL
);
```
**b)**
```
INSERT INTO Movie VALUES(
	"001",
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
	7
);
```

**c)**
```
INSERT INTO Movie VALUES(
	"002",
	"Doce de Mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
	"2012-12-27",
	10
);
```

**d)**
```
INSERT INTO Movie VALUES(
	"003",
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
	8
);
```

**e)**
```
INSERT INTO Movie VALUES(
	"004",
	"Cidade de Deus",
	"Os caminhos de duas crianças divergem nas favelas do Rio, enquanto um se esforça para se tornar um fotógrafo e o outro um capo.",
	"2002-08-30",
	9
);
```

#### Exercício 6
**a)** `SELECT id, name, score from Movie WHERE id = "003";`

**b)** `SELECT * from Movie WHERE name = "Doce de Mãe";`

**c)** `SELECT id, name, description from Movie WHERE score > 6;`

#### Exercício 7
**a)** `SELECT * from Movie WHERE name LIKE "%vida%";`

**b)** `SELECT * from Movie WHERE name LIKE "%Dona%" OR description LIKE "%Dona%";`

**c)** `SELECT * from Movie WHERE premiere_date < "2022-08-22";`

**d)** `SELECT * from Movie WHERE premiere_date < "2022-08-22" AND (name LIKE "%Dona%" OR description LIKE "%Dona%") AND score > 7;`