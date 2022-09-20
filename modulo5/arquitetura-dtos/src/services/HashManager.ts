import bcrypt from 'bcryptjs'

export interface IHashCompare {
    plaintext: string,
    hash: string
}

export class HashManager {
    public hash = async (plaintext: string) => {
        const rounds = Number(process.env.BCRYPT_SALT_ROUNDS)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    public compare = async (input: IHashCompare) => {
        const {plaintext, hash} = input
        
        return bcrypt.compare(plaintext, hash)
    }
}