import { Request, Response } from "express"
import { createPurchase } from "../../data/purchases/createPurchase"
import { selectProductById } from "../../data/products/selectProductById"
import { Product } from "../../types"

export const postPurchases = async(req: Request, res: Response): Promise<any> => {
    try {
        const { userId, productId, quantity } = req.body

        // Verificações
        if(!userId || !productId || !quantity) {
            res.statusCode = 422
            throw new Error("É preciso passar um id de usuário, um id de produto e a quantidade do produto.")
        }
        if(isNaN(quantity)) {
            res.statusCode = 422
            throw new Error("A quantidade deve ser um número.")
        }
        if(quantity <= 0) {
            res.statusCode = 422
            throw new Error("A quantidade deve ser maior do que zero.")
        }

        // Calcula preço
        const product: Product = await selectProductById(productId)
        if(!product) {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }
        const total: number = quantity * product.price

        // Cadastra a compra no banco de dados
        await createPurchase(userId, productId, quantity, total)

        // Resposta
        res.status(201).send({ message: "Compra feita com sucesso!" })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}