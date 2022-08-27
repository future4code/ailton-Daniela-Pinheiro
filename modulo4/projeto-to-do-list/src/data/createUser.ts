import { connection } from "../data/dataBase"
// import { selectAllUsers } from "./selectAllUsers"
// import { User } from "../types"

const generateUserId = (nickname: string) => {
    const userId: string = nickname.split("").map(character => {
        return character.charCodeAt(0)
    }).join("")

    return userId
}

export const createUser = async(name: string, nickname: string, email: string): Promise<any> => {
    const result = await connection('ListUser')
        .insert({
            id: generateUserId(nickname),
            name: name,
            nickname: nickname,
            email: email
        })
    
    return result
}