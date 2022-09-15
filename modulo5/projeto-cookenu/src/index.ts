import { app } from "./data/application"
import UserController from "./endpoints/userController"

const userController = new UserController()

app.post("/signup", userController.userSignUp)
app.get("/")