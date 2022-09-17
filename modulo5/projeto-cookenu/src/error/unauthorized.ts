import { BaseError } from "./baseError"

export class Unauthorized extends BaseError {
    constructor() {
        super(401, "Você não tem autorização para acessar este endpoint.")
    }
}