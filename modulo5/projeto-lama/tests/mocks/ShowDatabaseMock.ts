import { ICreateTicketInput, ISearchTicketInput, IShowDB, ITicketDB, Show } from "../../src/models/Show"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public searchShowByDate = async(date: Date): Promise<IShowDB | undefined> => {
        const mockDate = new Date("12/05/2022")

        if(date.toDateString() == mockDate.toDateString()) {
            const show: IShowDB = {
                id: "001",
                band: "Mock Band",
                startsAt: mockDate
            }

            return show
        } else {
            return undefined
        }
    }

    public searchShowById = async(id: string): Promise<IShowDB | undefined> => {
        const mockDate = new Date("12/05/2022")
        const mockDate2 = new Date("12/10/2022")

        switch(id) {
            case "001":
                const show1: IShowDB = {
                    id: "001",
                    band: "Mock Band",
                    startsAt: mockDate
                }
                return show1
            case "002":
                const show2: IShowDB = {
                    id: "002",
                    band: "Mock Band Again",
                    startsAt: mockDate2
                }
                return show2
            default:
                return undefined
        }
    }

    public createShow = async(show: Show): Promise<void> => {}

    public getShows = async(): Promise<IShowDB[]> => {
        const mockDate = new Date("12/05/2022")
        const mockDate2 = new Date("12/10/2022")

        const shows: IShowDB[] = [
            {
                id: "001",
                band: "Mock Band",
                startsAt: mockDate
            },
            {
                id: "002",
                band: "Mock Band Again",
                startsAt: mockDate2
            }
        ]

        return shows
    }

    public getTickets = async(showId: string): Promise<number> => {
        if(showId === "001") {
            return 5000
        } else {
            return 0
        }
    }

    public searchTicketsByUser = async(input: ISearchTicketInput): Promise<ITicketDB | undefined> => {
        const { showId } = input

        if (showId === "001") {
            const ticket: ITicketDB = {
                id: "001",
                showId: "001",
                userId: "id-mock"
            }

            return ticket
        } else {
            return undefined
        }
    }

    public createTicket = async(ticket: ICreateTicketInput): Promise<void> => {}

    public deleteTicket = async(id: string): Promise<void> => {}
}