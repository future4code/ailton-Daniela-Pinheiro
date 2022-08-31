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

export async function selectAllUsersC(order: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${order} ASC;
    `)
 
    return result[0]
}

export async function selectAllUsersD(offset: number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       LIMIT 5 OFFSET ${offset};
    `)
 
    return result[0]
}