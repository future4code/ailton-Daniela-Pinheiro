import { app } from "./application"
import UserEndpoints from "./endpoints/userEndpoints"

const userEndpoints = new UserEndpoints()

app.post("/signup", userEndpoints.signUp)
app.post("/login", userEndpoints.login)

app.get("/user/profile", userEndpoints.getProfile)