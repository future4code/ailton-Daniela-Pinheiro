import { app } from "./application"
import RecipeEndpoints from "./endpoints/recipeEndpoints"
import UserEndpoints from "./endpoints/userEndpoints"

const userEndpoints = new UserEndpoints()
const recipeEndpoints = new RecipeEndpoints()

app.post("/signup", userEndpoints.signUp)
app.post("/login", userEndpoints.login)

app.get("/user/profile", userEndpoints.getProfile)
app.get("/user/:id", userEndpoints.getOthersProfile)

app.post("/recipe", recipeEndpoints.postRecipe) //testar