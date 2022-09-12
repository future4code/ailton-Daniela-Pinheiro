import { connection } from "./connection"

export const createUser = async(id: string, email: string, password: string) => {
    await connection('UserTable')
      .insert({
        id,
        email,
        password,
      })
  }