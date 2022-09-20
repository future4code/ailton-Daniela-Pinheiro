import { Recipe } from "../model/recipe"
import { BaseDataBase } from "./baseDataBase"

export class RecipeData extends BaseDataBase {
    private static tableName = "cookenu_recipe"

    async createRecipe(recipe: Recipe): Promise<void> {
        await this.getConnection()
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                created_at: recipe.getCreatedAt(),
                creator_id: recipe.getCreatorId()
            })
            .into(RecipeData.tableName)
    }

    async getRecipeById(id: string): Promise<Recipe | undefined> {
        const result = await this.getConnection()
            .select('*')
            .from(RecipeData.tableName)
            .where({ id })

            if(!result.length) {
                return undefined
            } else {
                const recipe = new Recipe(
                    result[0].id,
                    result[0].title,
                    result[0].description,
                    result[0].created_at,
                    result[0].creator_id
                )
        
                return recipe
            }
    }
}