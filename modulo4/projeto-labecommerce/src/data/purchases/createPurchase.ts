import { connection } from "../connection"

export const createPurchase = async(userId: string, productId: string, quantity: number, total: number): Promise<void> => {
    const id: string = Date.now().toString() + Math.random().toString()

    await connection('labecommerce_purchases')
        .insert({
            id,
            user_id: userId,
            product_id: productId,
            quantity,
            total_price: total
        })
}