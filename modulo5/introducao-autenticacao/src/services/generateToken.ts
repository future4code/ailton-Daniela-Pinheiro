import * as jwt from "jsonwebtoken"
import { AuthData } from "../types"

const expiresIn = "5min"

export function generateToken(input: AuthData): string {
    const { id } = input

    const token = jwt.sign(
        {
            id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )

    return token
}