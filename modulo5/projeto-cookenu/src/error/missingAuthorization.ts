import { BaseError } from "./baseError"

export class MissingAuthorization extends BaseError {
    constructor() {
        super(422, "É preciso passar um token de autorização.")
    }
}