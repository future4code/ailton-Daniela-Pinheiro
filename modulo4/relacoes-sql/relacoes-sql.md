### Exercício 1
**a)** Uma chave estrangeira (*foreign key*) é uma propriedade que faz referência a uma chave vinda de outra tabela, criando assim uma relação entre essas tabelas diferentes.

**b)**
```
INSERT INTO Rating
VALUES (
	"001",
    "Enredo fantástico e ótima atuação!",
    8.5,
    "005"
);
```

**c)** Retorna uma mensagem de erro, pois não encontrou a chave do filme que deveria ser referenciada na chave estrangeira:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails `ailton-daniela-pinheiro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

**d)** `ALTER TABLE Movie DROP COLUMN score;`

**e)** Retorna uma mensagem de erro, pois o filme está relacionado a informações de outra tabela diferente. Para deletar o filme, seria preciso deletar todas as avaliações desse filme primeiro.
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-daniela-pinheiro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

### Exercício 2
**a)** A tabela MovieCast contém apenas duas propriedades, e cada uma delas faz referência (através da chave estrangeira) a informações de tabelas distintas (Actor e Movie), criando assim uma relação entre estas duas tabelas.

**b)**
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"004",
	"005"
);
```

**c)** Retorna um erro por não encontrar a chave estrangeira que é referenciada na chave de MovieCast:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-daniela-pinheiro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

**d)** Retorna um erro pois a chave do ator está associada a uma chave em outra tabela. Para deletar o ator, seria preciso apagar todas as relações dele com outras tabelas.
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-daniela-pinheiro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

### Exercício 3
**a)** A *query* retorna todas as informações das duas tabelas que atendem à condição em `ON`, de que o *id* do filme na tabela *Movie* é igual ao *movie_id* da tabela *Rating*. Nesse caso, `ON` tem a mesma função do `WHERE` que usamos em *queries* sem o `JOIN`.

**b)** 
```
SELECT Movie.name, Movie.id, Rating.rate
FROM Movie INNER JOIN Rating
ON Movie.id = Rating.movie_id;
```