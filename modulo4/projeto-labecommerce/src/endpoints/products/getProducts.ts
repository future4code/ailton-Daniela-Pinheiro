import { Request, Response } from "express"
import { selectProducts } from "../../data/products/selectProducts"
import { Product } from "../../types"

export const getProducts = async(req: Request, res: Response): Promise<any> => {
    try {
        // Seleciona os usuários
        const products: Product[] = await selectProducts()

        // Resposta
        res.send({ products: products})
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage})
    }
}