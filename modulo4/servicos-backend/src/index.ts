import { app } from "./data/app"
import { getAddress } from "./endpoints/getAddress"
import { postAddress } from "./endpoints/postAddress"

// Exercicio 1
app.get("/address/:cep", getAddress)

// Exercicio 2
// CREATE TABLE Address(
//     cep VARCHAR(255) NOT NULL,
//     logradouro VARCHAR(255) NOT NULL,
//     numero INT NOT NULL,
//     complemento INT,
//     bairro VARCHAR(255) NOT NULL,
//     cidade VARCHAR(255) NOT NULL,
//     estado VARCHAR(255) NOT NULL
// );

// Exercicio 3
app.post("/address", postAddress)