import { PostDatabase } from "../data/PostDatabase"
import { ICreatePostInput } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { Post } from "../models/Post"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async(input: ICreatePostInput) => {
        const { token, content } = input

        if(!token) {
            throw new Error("É necessário passar um token de autorização.")
        }
        if(!content || content.length < 1) {
            throw new Error("É necessário passar o conteúdo do post.")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new Error("Usuário não autorizado.")
        }

        const id: string = this.idGenerator.generateId()
        const newPost = new Post(
            id,
            content,
            payload.id,
            0
        )

        await this.postDatabase.createPost(newPost)
    }
}