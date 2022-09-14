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
**a)** A classe ResidentialClient possui as propriedades e métodos herdados de Residence (número de residentes, CEP e cálculo da conta) e também as propriedades necessárias para ser um Client (nome, registro, consumo).

### Exercício 5
**a)** Ambas as classes possuem as propriedades especificadas pela interface Client (nome, registro, consumo).

**b)** Como as classes são filhas de classes diferentes, as propriedades e métodos herdados são diferentes.

### Exercício 6
**a)** Deve ser filha de Industry, para herdar suas propriedades e métodos.

**b)** Implementa Client, pois as outras propriedades (nome, registro, consumo) são especificadas nessa interface.

**c)** Pois esses métodos são utilizados para acessar as informações privadas da classe, e o método de calcular a conta de energia já é herdado da classe mãe, não havendo necessidade de criar outros para o propósito dessa aplicação.