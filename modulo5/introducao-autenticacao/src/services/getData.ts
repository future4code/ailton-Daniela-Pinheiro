import * as jwt from "jsonwebtoken"
import { AuthData } from "../types"

export function getData(token: string): AuthData {
    const payload = jwt.verify(token, "bananinha") as any
    const result = { id: payload.id }

    return result
}