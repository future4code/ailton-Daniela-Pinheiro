import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class HashManager {
    async generateHash(string: string): Promise<string> {
        const cost = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(cost)
        const result = await bcrypt.hash(string, salt)

        return result
    }

    async compareHash(plaintext: string, hash: string): Promise<boolean> {
        const result: boolean = await bcrypt.compare(plaintext, hash)

        return result
    }
}