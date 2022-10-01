import { ICompareHash } from "../../src/services/HashManager"

export class HashManagerMock {
    public generateHash = async(plaintext: string): Promise<string> => {
        if(plaintext === "bananinha") {
            return "hash-bananinha"
        }

        return "hash-mock"
    }

    public compareHash = async(input: ICompareHash): Promise<boolean> => {
        const { plaintext, hash } = input
        
        if(plaintext === "bananinha" && hash === "hash-bananinha") {
            return true
        } else {
            return false
        }
    }
}