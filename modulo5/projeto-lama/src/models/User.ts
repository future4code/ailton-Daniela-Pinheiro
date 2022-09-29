export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
        ) {}
        
        public getId = () => {
            return this.id
        }
        
        public getName = () => {
            return this.name
        }
        
        public getEmail = () => {
            return this.email
        }
        
        public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }
    
    // setters
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface ISignUpInput {
    name: string,
    email: string,
    password: string
}

export interface ISignupOutput {
    message: string,
    token: string
}

export interface ILoginInput {
    email: string,
    password: string
}