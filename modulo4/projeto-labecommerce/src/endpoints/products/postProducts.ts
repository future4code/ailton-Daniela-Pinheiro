import { Request, Response } from "express"
import { createProduct } from "../../data/products/createProduct"

export const postProducts = async(req: Request, res: Response): Promise<any> => {
    try {
        const {name, price, imageUrl} = req.body

        // Verificações
        if(!name || !price || !imageUrl) {
            res.statusCode = 422
            throw new Error("É preciso passar um nome, um preço e a url de uma imagem.")
        }
        if(isNaN(price)) {
            res.statusCode = 422
            throw new Error("O preço deve ser um número.")
        }

        // Cria o produto no banco de dados
        await createProduct(name, price, imageUrl)

        // Resposta
        res.status(201).send({ message: "Produto cadastrado com sucesso!" })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })
    }
}