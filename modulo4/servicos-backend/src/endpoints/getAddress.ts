import { Request, Response } from "express"
import { requestCEP } from "../services/requestCEP"

export async function getAddress(req: Request, res: Response): Promise<any> {
    try {
        const cep: string = req.params.cep

        const address = await requestCEP(cep)
        // Verificação
        if(!address) {
            res.statusCode = 404
            throw new Error("Endereço não encontrado.")
        }
        
        res.status(200).send({ address: {
            logradouro: address.logradouro,
            bairro: address.bairro,
            cidade: address.localidade,
            estado: address.uf
        }})
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message })  
    }
}