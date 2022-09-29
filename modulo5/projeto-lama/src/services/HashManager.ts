import dotenv from "dotenv"
import bcrypt from "bcryptjs"

dotenv.config()

export interface ICompareHash {
    plaintext: string,
    hash: string
}

export class HashManager {
    public generateHash = async(plaintext: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_SALT_ROUNDS)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    public compareHash = async(input: ICompareHash): Promise<boolean> => {
        const { plaintext, hash } = input
        
        return bcrypt.compare(plaintext, hash)
    }
}