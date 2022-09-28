import * as bcrypt from "bcryptjs"

export interface IHashCompare {
    plaintext: string,
    hash: string
}

export class HashManager {
    public async generateHash(plaintext: string): Promise<string> {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(cost)
        const hash: string = await bcrypt.hash(plaintext, salt)

        return hash
    }

    public async compareHash(input: IHashCompare): Promise<boolean> {
        const { plaintext, hash } = input

        const hashCompare: boolean = await bcrypt.compare(plaintext, hash)

        return hashCompare
    }
}