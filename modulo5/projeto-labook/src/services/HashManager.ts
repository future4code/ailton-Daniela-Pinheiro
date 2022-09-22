import * as bcrypt from "bcryptjs"

export class HashManager {
    public async generateHash(plaintext: string): Promise<string> {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(cost)
        const hash: string = await bcrypt.hash(plaintext, salt)

        return hash
    }

    public async compareHash(plaintext: string, hash: string): Promise<boolean> {
        const hashCompare: boolean = await bcrypt.compare(plaintext, hash)

        return hashCompare
    }
}