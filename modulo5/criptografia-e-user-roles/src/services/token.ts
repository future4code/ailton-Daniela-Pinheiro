import * as jwt from "jsonwebtoken"
import { AuthData } from "../types"


const expiresIn = "5min"

export function generateToken(input: AuthData): string {
    const { id, role } = input

    const token = jwt.sign(
        {
            id,
            role
        },
        String(process.env.JWT_KEY),
        {
            expiresIn
        }
    )

    return token
}

export const getData = (token: string): AuthData => {
    const payload = jwt.verify(token, String(process.env.JWT_KEY)) as any

    const result = {
      id: payload.id,
      role: payload.role
    }

    return result
  }