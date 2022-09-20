import { BaseError } from "./baseError"

export class IncorrectCredentials extends BaseError {
    constructor() {
        super(401, "E-mail ou senha incorretos.")
    }
}