import { app } from "./data/application"
import UserEndpoints from "./endpoints/userEndpoints"

const userEndpoints = new UserEndpoints()

app.post("/signup", userEndpoints.signUp)
app.get("/login", userEndpoints.login)