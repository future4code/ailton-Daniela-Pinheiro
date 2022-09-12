import { app } from "./data/application"
import { userSignUp } from "./endpoints/userSignUp"

app.post("/user/signup", userSignUp)