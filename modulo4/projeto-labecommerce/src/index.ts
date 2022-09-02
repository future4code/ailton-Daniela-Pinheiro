import { app } from "./data/app"
import { getUsers } from "./endpoints/getUsers"
import { postUsers } from "./endpoints/postUsers"


app.post("/users", postUsers)

app.get("/users", getUsers)

// app.post("/products")
// app.get("/products")