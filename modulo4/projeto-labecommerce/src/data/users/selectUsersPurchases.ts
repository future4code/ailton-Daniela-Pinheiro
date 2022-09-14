import { Purchase } from "../../types"
import { connection } from "../connection"

export const selectUsersPurchases = async(userId: string): Promise<Purchase[]> => {
    const result = await connection('labecommerce_user')
        .rightJoin('labecommerce_purchases', { 'labecommerce_user.id': 'labecommerce_purchases.user_id' })
        .where({ 'labecommerce_user.id': userId })
    
        const purchases: Purchase[] = result.map(purchase => {
            return {
                id: purchase.id,
                userId: purchase.user_id,
                productId: purchase.product_id,
                quantity: purchase.quantity,
                totalPrice: purchase.total_price
            }
        })

    return purchases
}