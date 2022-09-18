import { Request, Response } from "express"
import { RecipeData } from "../data/recipeData"
import { MissingAuthorization } from "../error/missingAuthorization"
import { MissingFields } from "../error/missingFields"
import { Recipe } from "../model/recipe"
import { Authenticator } from "../services/authenticator"
import { IdGenerator } from "../services/idGenerator"

import { UserData } from "../data/userData"
import { Unauthorized } from "../error/unauthorized"


export default class RecipeEndpoints {
    async postRecipe(req: Request, res: Response) {
        try {
            const { title, description } = req.body
            const token: string = req.headers.authorization as string

            if(!token) {
                throw new MissingAuthorization()
            }

            if(!title || !description) {
                throw new MissingFields()
            }

            const { id } = new Authenticator().getTokenData(token)

            const recipeId: string = new IdGenerator().generateId()

            const createdAt: Date = new Date()

            const recipe = new Recipe(recipeId, title, description, createdAt, id)

            await new RecipeData().createRecipe(recipe)

            res.status(201).send({ message: "Receita criada com sucesso." })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    async getRecipe(req: Request, res: Response) {
        try {
            const id: string = req.params.id as string
            const token: string = req.headers.authorization as string

            if(!token) {
                throw new MissingAuthorization()
            }

            const tokenData = new Authenticator().getTokenData(token)

            const recipe = await new RecipeData().getRecipeById(id)

            if(!recipe) {
                res.statusCode = 404
                throw new Error("Receita não encontrada.")
            }

            res.status(200).send({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                createdAt: recipe.getCreatedAtString()
            })
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}