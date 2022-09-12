import { app } from "./data/application"
import { getUserProfile } from "./endpoints/getUserProfile"
import { userLogin } from "./endpoints/userLogin"
import { userSignUp } from "./endpoints/userSignUp"


app.post("/user/signup", userSignUp)
app.post("/user/login", userLogin)

app.get("/user/profile", getUserProfile)