// Exercício 1
// a. O construtor serve para definir os parâmetros necessários para se criar um
//    objeto pertencente a uma classe. Ele é chamado como a função dentro da classe:
//    constructor(parâmetros)

// b. A mensagem foi impressa uma vez no console (na hora de criar o objeto de UserAccount).
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
}

const usuario: UserAccount = new UserAccount("12345678910", "Nome", 20)

// c. As propriedades privadas de uma classe só podem ser acessadas dentro da própria classe.
//    Desse modo, é possível criar uma função que retorne essas propriedades para ser utilizada
//    como método nos objetos pertencentes a essa classe.

// Exercício 2
// a.
// b.
// c.

// Exercício 3
// a.
// b.
// c.
