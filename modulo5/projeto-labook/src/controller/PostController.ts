import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { ICreatePostInput, IDeletePostInput } from "../models/Post"

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

    public getPosts = async(req: Request, res: Response) => {
        let statusCode = 400
        try {
            const token: string = req.headers.authorization as string

            const posts = await this.postBusiness.getPosts(token)

            res.status(200).send({ posts: posts })
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })  
        }
    }

    public deletePost = async(req: Request, res: Response) => {
        let statusCode = 400
        try {
            const token: string = req.headers.authorization as string
            const postId: string = req.params.id
            
            const input: IDeletePostInput = { token, postId }
            await this.postBusiness.deletePost(input)

            res.status(200).send({ message: "Post deletado." })
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })  
        }
    }

    public likePost = async(req: Request, res: Response) => {
        let statusCode = 400
        try {
            const token: string = req.headers.authorization as string
            const postId: string = req.params.id
            
            const input: IDeletePostInput = { token, postId }
            await this.postBusiness.likePost(input)

            res.status(200).send({ message: "Post curtido!" })
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })  
        }
    }
}