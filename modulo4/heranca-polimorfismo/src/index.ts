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
}

const newUser: User = new User("001", "aaaa@mail.com", "Alguém", "123456")

console.log(`Nome: ${newUser.getName()}
Email: ${newUser.getEmail()}
Id: ${newUser.getId()}`)