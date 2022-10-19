export interface IPetDB {
    id: string,
    name: string,
    breed: string,
    age: number
}

export class Pet {
    constructor(
        private id: string,
        private name: string,
        private breed: string,
        private age: number
    ) {}

    public getId = (): string => {
        return this.id
    }

    public getName = (): string => {
        return this.name
    }

    public getBreed = (): string => {
        return this.breed
    }

    public getAge = (): number => {
        return this.age
    }
}