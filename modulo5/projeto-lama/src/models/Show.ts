export class Show {
    constructor(
        private id: string,
        private band: string,
        private startsAt: Date,
        private tickets: number = 5000
    ) {}

    public getId = () => {
        return this.id
    }

    public getBand = () => {
        return this.band
    }

    public getStartsAt = () => {
        return this.startsAt
    }

    public getTickets = () => {
        return this.tickets
    }

    public setTickets = (tickets: number) => {
        this.tickets = tickets
    }
}

export interface IShowDB {
    id: string,
    band: string,
    startsAt: Date
}

export interface ICreateShowInput {
    token: string,
    band: string,
    startsAt: string
}

export interface IGetTicketsInput {
    showId: string,
    userId: string
}