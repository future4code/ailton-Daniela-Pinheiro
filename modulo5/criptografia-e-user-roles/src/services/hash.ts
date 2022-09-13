import * as bcrypt from "bcryptjs"

export async function generateHash(string: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(string, salt)

    return result
}

export async function compareHash(string: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(string, hash)
    
    return result
}