import { Product } from "../../types"
import { connection } from "../connection"

export const selectProductById = async(productId: string): Promise<Product> => {
    const result = await connection('labecommerce_products')
        .where({ id: productId })

    return result[0]
}