import { connection } from "../connection"

export const createProduct = async(name: string, price: number, imageUrl: string): Promise<void> => {
    const id: string = Date.now().toString() + Math.random().toString()

    await connection('labecommerce_products')
        .insert({
            id,
            name,
            price,
            image_url: imageUrl
        })
}