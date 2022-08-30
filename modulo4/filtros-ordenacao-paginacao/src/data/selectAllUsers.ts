import { connection } from "./connection"


export default async function selectAllUsersA(name: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%";
    `)
 
    return result[0]
}

export async function selectAllUsersB(type: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE type LIKE "${type}";
    `)
 
    return result[0]
}