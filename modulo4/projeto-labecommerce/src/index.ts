import { app } from "./data/app"
import { getProducts } from "./endpoints/products/getProducts"
import { getUsers } from "./endpoints/users/getUsers"
import { postProducts } from "./endpoints/products/postProducts"
import { postUsers } from "./endpoints/users/postUsers"
import { postPurchases } from "./endpoints/purchases/postPurchases"
import { getUsersPurchases } from "./endpoints/users/getUsersPurchases"

// Endpoints Usuários
app.get("/users", getUsers)
app.post("/users", postUsers)
app.get("/users/:user_id/purchases", getUsersPurchases)

// Endpoints Produtos
app.get("/products", getProducts)
app.post("/products", postProducts)

// Endpoints Compras
app.post("/purchases", postPurchases)