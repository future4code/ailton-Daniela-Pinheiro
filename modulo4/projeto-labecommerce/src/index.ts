import { app } from "./data/app"
import { postUsers } from "./endpoints/postUsers"


app.post("/users", postUsers)

// app.get("/users")

// app.post("/products")
// app.get("/products")