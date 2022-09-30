import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public searchShowByDate = async(date: Date): Promise<IShowDB | undefined> => {
        const result = await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
            .select('*')
            .where({ starts_at: date })

        if(!result.length) {
            return undefined
        } else {
            const show: IShowDB = {
                id: result[0].id,
                band: result[0].band,
                startsAt: result[0].starts_at
            }

            return show
        }
    }

    public createShow = async(show: Show): Promise<void> => {
        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
            .insert({
                id: show.getId(),
                band: show.getBand(),
                starts_at: show.getStartsAt()
            })
    }
}