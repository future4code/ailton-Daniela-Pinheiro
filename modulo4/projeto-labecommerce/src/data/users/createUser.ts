import { connection } from "../connection"

export const createUser = async(name: string, email: string, password: string): Promise<void> => {
    const id: string = Date.now().toString() + Math.random().toString()

    await connection('labecommerce_user')
        .insert({
            id,
            name,
            email,
            password
        })
}