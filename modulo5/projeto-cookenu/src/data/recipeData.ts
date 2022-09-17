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
}