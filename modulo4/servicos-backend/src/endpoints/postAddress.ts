import { Request, Response } from "express"
import { createNewAddress } from "../data/createNewAddress"
import { requestCEP } from "../services/requestCEP"
import { Address } from "../types"

export async function postAddress(req: Request, res: Response): Promise<void> {
    try {
        const { cep, numero, complemento } = req.body
        // Verificação
        if(!cep || !numero) {
            res.statusCode = 422
            throw new Error("É necessário enviar um CEP e um número.")
        }

        // Busca o endereço
        const address = await requestCEP(cep)
        // Verificação
        if(!address) {
            res.statusCode = 404
            throw new Error("Endereço não encontrado.")
        }

        // Cria o endereço novo
        const newAddress: Address = {
            cep,
            logradouro: address.logradouro,
            numero,
            complemento,
            bairro: address.bairro,
            cidade: address.localidade,
            estado: address.uf,
        }
        // Cadastra na tabela
        await createNewAddress(newAddress)
        
        res.status(200).send({ message: "Endereço cadastrado com sucesso!" })
    } catch (error: any) {
        res.status( res.statusCode || 500 ).send({ message: error.message || error.sqlMessage })  
    }
}