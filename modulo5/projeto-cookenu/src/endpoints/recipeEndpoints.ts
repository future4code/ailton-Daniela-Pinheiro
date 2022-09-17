import { Request, Response } from "express"
import { UserData } from "../data/userData"
import { MissingFields } from "../error/missingFields"
import { Unauthorized } from "../error/unauthorized"
import { Authenticator } from "../services/authenticator"
import { IdGenerator } from "../services/idGenerator"

export default class RecipeEndpoints {
    async postRecipe(req: Request, res: Response) {
        try {
            const { title, description } = req.body
            const token: string = req.headers.authorization as string

            if(!title || !description) {
                throw new MissingFields()
            }

            // verificar token
            const { id } = new Authenticator().getTokenData(token)

            const authorizedUser = await new UserData().getUserById(id)

            if(!authorizedUser) {
                throw new Unauthorized()
            }

            // criar id e data
            const recipeId: string = new IdGenerator().generateId()

            const createDate: Date = new Date()
            console.log(createDate)

            // criar a receita no banco
            // await createRecipe(recipeId, title, description, createDate)

            // resposta
            res.status(201).send({ message: "Receita criada com sucesso." })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}