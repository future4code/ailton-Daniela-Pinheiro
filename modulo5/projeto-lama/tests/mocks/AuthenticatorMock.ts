import { ITokenPayload } from '../../src/services/Authenticator'
import { USER_ROLES } from '../../src/models/User'


export class AuthenticatorMock {
    public generateToken = (payload: ITokenPayload): string => {
        switch(payload.role) {
            case USER_ROLES.ADMIN:
                return "token-mock-admin"
            default:
                return "token-mock-normal"
        }
    }

    public getTokenPayload = (token: string): ITokenPayload | null => {
        switch(token) {
            case "token-mock-admin":
                const payloadAdmin: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.ADMIN
                }
                return payloadAdmin
            case "token-mock-normal":
                const payloadNormal: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.NORMAL
                }
                return payloadNormal
            default:
                return null
        }
    }
}