import { BaseError } from "./BaseError"

export class ParametersError extends BaseError {
    constructor(
        public message: string = "Missing or invalid parameters"
    ) {
        super(400, message)
    }
}