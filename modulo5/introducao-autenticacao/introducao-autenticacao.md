### Exercício 1
**a)** O uso de *strings* para representar o id é melhor do que o uso de números, pois a possibilidade de combinações é muito maior ao utilizar caracteres(que podem ser letras, números e até mesmo pontuações e caracteres especiais).
Assim, é possível garantir que uma grande quantidade de usuários terá ids distintos.

### Exercício 2
**a)** A função *createUser* recebe em seus parâmetros uma id, um e-mail e uma senha, e as insere na tabela existente no banco de dados através da *connection*.

**b)**
```
CREATE TABLE UserTable (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

### Exercício 3
**a)** A linha *as string* garante que o que será recebido está no formato de *string*, que é o formato que a função de criar o token precisa no lugar da *key*.

### Exercício 5
**a)**
**b)**
### Exercício 6
**a)**
**b)**
### Exercício 7
**a)**
**b)**