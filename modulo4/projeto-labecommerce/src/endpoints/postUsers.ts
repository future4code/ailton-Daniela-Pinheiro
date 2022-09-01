import { Request, Response } from "express"
import { createUser } from "../data/createUser"

export const postUsers = async(req: Request, res: Response): Promise<any> => {
    try {
        const {name, email, password} = req.body

        // Verificação
        if(!name || !email || !password) {
            res.statusCode = 422
            throw new Error("É preciso passar um nome, um e-mail e uma senha.")
        }

        // Cria o usuário no banco de dados
        await createUser(name, email, password)

        // Resposta
        res.send({ message: "Usuário criado com sucesso!"})
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage})
    }
}