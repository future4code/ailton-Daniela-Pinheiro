import { BaseError } from "./baseError"

export class MissingFields extends BaseError {
    constructor() {
        super(422, "Todas as informações são obrigatórias.")
    }
}