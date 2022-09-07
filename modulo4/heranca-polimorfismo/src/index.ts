// HERANÇA
// Exercício 1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    // Exercicio 4 e 5
    public introduceYourself(): string {
        // return "Olá, bom dia!"
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const newUser: User = new User("001", "aaaa@mail.com", "Alguém", "123456")

console.log(`Nome: ${newUser.getName()}
Email: ${newUser.getEmail()}
Id: ${newUser.getId()}`)

// Exercicio 2
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const newCustomer: Customer = new Customer("002", "aaabbb@mail.com", "Fulano", "1234567", "12345678901088")

// Exercicio 3
console.log(`Nome: ${newCustomer.getName()}
Email: ${newCustomer.getEmail()}
Id: ${newCustomer.getId()}
Cartão: ${newCustomer.getCreditCard()}
Compras: ${newCustomer.purchaseTotal}`)

// Exercicio 4 e 5
console.log(newCustomer.introduceYourself(),
    newUser.introduceYourself())

// POLIMORFISMO
// Exercicio 1
export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;

    calculateBill(): number;
}

const client: Client = {
    name: "Sicrano",
    registrationNumber: 1,
    consumedEnergy: 20,

    calculateBill: () => {
        return 2
    }
}

console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

// Exercicio 2
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// const place: Place = new Place()

// Exercicio 3
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const residence: Residence = new Residence(2, "10000000")

const commerce: Commerce = new Commerce(5, "10000001")

const industry: Industry = new Industry(4, "10000002")

console.log(residence.getCep(), commerce.getCep(), industry.getCep())

// Exercicio 4

