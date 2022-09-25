import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { ICreatePostInput } from "../models/Post"

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async(req: Request, res: Response) => {
        let statusCode = 400
        try {
            const token: string = req.headers.authorization as string
            const { content } = req.body

            const input: ICreatePostInput = { token, content }

            await this.postBusiness.createPost(input)

            res.status(201).send({ message: "Post criado com sucesso." })
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })  
        }
    }
}