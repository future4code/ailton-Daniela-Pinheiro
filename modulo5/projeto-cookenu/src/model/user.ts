export class User {
    constructor(
        private id: string,
        public name: string,
        public email: string,
        private password: string
    ) {}

    protected getId(): string {
        return this.id
    }
    getName(): string {
        return this.name
    }
    getEmail(): string {
        return this.email
    }
    protected getPassword(): string {
        return this.password
    }
}