## Herança

### Exercício 1
**a)** Seria necessário criar um *getter* dentro da classe User que retornasse a senha, uma vez que essa é uma informação privada.

**b)** Foi impressa uma vez, quando o novo usuário é criado.

### Exercício 2
**a)** Foi impressa uma vez, quando o novo cliente é criado.

**b)** Foi impressa uma vez, quando o novo cliente é criado, pois Customer é uma classe filha de User, e seu construtor referencia o construtor da classe mãe. Assim, quando se chama o construtor de Customer, o de User também é chamado.

### Exercício 3
**a)** Não seria possível imprimir o *password*, pois é uma informação privada da classe mãe e não há nenhum método que a retorne.


## Polimorfismo

### Exercício 1
**a)** Todas as informações foram impressas corretamente, pois são todas públicas.

### Exercício 2
**a)** O Typescript gera um erro por não ser possível criar uma instância de uma classe abstrata, como é o caso de Place.

**b)** Seria preciso criar uma classe filha de Place.

### Exercício 4
**a)** 

**b)** 

### Exercício 5
**a)**

**b)** 