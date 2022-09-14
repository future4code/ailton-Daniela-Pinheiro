import * as jwt from "jsonwebtoken"
import { AuthData } from "../types"

const expiresIn = "5min"

export function generateToken(input: AuthData): string {
    const { id } = input

    const token = jwt.sign(
        {
            id
        },
        // String(process.env.JWT_KEY),
        "bananinha",
        {
            expiresIn
        }
    )

    return token
}