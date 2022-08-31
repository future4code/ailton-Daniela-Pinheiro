import { Address } from "../types"
import { connection } from "./connection"

export async function createNewAddress(address: Address): Promise<any> {
    await connection('Address')
        .insert(address)
}