import { Product } from "../../types"
import { connection } from "../connection"

export const selectProducts = async(): Promise<Product[]> => {
    const result = await connection('labecommerce_products')

    return result
}