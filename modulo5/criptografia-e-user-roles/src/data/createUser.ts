import { connection } from "./connection"

export const createUser = async(id: string, email: string, password: string, role: string) => {
    await connection('UserTable')
        .insert({
            id: id,
            email: email,
            password: password,
            role: role
        })
  }