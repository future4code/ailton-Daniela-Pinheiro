export interface IPersonDB {
    id: string,
    name: string,
    surname: string,
    participation: number
}

export interface IPersonInput {
    name: string,
    surname: string,
    participation: number
}

export class Person {
    constructor(
        private id: string,
        private name: string,
        private surname: string,
        private participation: number
    ) {}

    public getId = (): string => {
        return this.id
    }

    public getName = (): string => {
        return this.name
    }

    public getSurname = (): string => {
        return this.surname
    }

    public getParticipation = (): number => {
        return this.participation
    }
}