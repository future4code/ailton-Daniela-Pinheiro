class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    }

    getDescription() {
        return this.description
    }

    getValue() {
        return this.value
    }

    getDate() {
        return this.date
    }
}

const transacao: Transaction = new Transaction("Boleto", 10, "05/09/2022")

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [transacao];
    
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

    getDCpf() {
        return this.cpf
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getBalance() {
        return this.balance
    }

    getTransactions() {
        return this.transactions
    }
}
    
const usuario: UserAccount = new UserAccount("12345678910", "Nome", 20)

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    getAccounts() {
        return this.accounts
    }

    setAccount(account: UserAccount) {
        this.accounts.push(account)
    }
}

const contas: UserAccount[] = [
    usuario
]

const usuario2: UserAccount = new UserAccount("12344455599", "Fulaninho", 30)

const banco: Bank = new Bank(contas)

banco.setAccount(usuario2)

console.log(banco.getAccounts())

// Exercício 1
// a. O construtor serve para definir os parâmetros necessários para se criar um
//    objeto pertencente a uma classe. Ele é chamado como a função dentro da classe:
//    constructor(parâmetros)
    
// b. A mensagem foi impressa uma vez no console (na hora de criar o objeto de UserAccount).

// c. As propriedades privadas de uma classe só podem ser acessadas dentro da própria classe.
//    Desse modo, é possível criar uma função que retorne essas propriedades para ser utilizada
//    como método nos objetos pertencentes a essa classe.