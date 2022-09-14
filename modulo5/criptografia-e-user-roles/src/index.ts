import { app } from "./data/application"
import { userLogin } from "./endpoints/userLogin"
import { userProfile } from "./endpoints/userProfile"
import { userSignUp } from "./endpoints/userSignUp"

app.post("/user/signup", userSignUp)
app.post("/user/login", userLogin)
app.get("/user/profile", userProfile)