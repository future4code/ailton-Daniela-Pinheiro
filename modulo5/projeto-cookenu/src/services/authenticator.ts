import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export interface AuthenticationData {
    id: string,
    // role: string
}

export class Authenticator {
    generateToken(info: AuthenticationData): string {
        const token = jwt.sign(
            {
                id: info.id,
                // role: info.role
            },
            String(process.env.JWT_KEY),
            {
                expiresIn: String(process.env.JWT_EXPIRES_IN)
            }
        )
        
        return token
    }

    getTokenData(token: string): AuthenticationData {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return payload as AuthenticationData
    }
}