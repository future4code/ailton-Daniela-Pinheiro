import { Request, Response } from "express"
import { RecipeData } from "../data/recipeData"
import { UserData } from "../data/userData"
import { MissingFields } from "../error/missingFields"
import { Unauthorized } from "../error/unauthorized"
import { Recipe } from "../model/recipe"
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

            const { id } = new Authenticator().getTokenData(token)

            const authorizedUser = await new UserData().getUserById(id)
            if(!authorizedUser) {
                throw new Unauthorized()
            }

            const recipeId: string = new IdGenerator().generateId()

            const createdAt: Date = new Date()

            const recipe = new Recipe(recipeId, title, description, createdAt, id)

            await new RecipeData().createRecipe(recipe)

            res.status(201).send({ message: "Receita criada com sucesso." })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}