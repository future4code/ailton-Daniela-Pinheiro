import { app } from "./data/app"
import { getUsers } from "./endpoints/getUsers"
import { postProducts } from "./endpoints/postProducts"
import { postUsers } from "./endpoints/postUsers"


app.post("/users", postUsers)

app.get("/users", getUsers)

app.post("/products", postProducts)
// app.get("/products")