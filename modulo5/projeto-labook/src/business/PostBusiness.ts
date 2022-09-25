import { PostDatabase } from "../data/PostDatabase"
import { ICreatePostInput, IDeletePostInput, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

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

    public getPosts = async(token: string): Promise<Post[]> => {
        if(!token) {
            throw new Error("É necessário passar um token de autorização.")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new Error("Usuário não autorizado.")
        }

        const posts = await this.postDatabase.getPosts()

        const allPosts = posts.map(post => {
            return new Post(post.id, post.content, post.userId)
        })

        for(let post of allPosts) {
            const postId: string = post.getId()
            const likes: number = await this.postDatabase.getLikes(postId) as number

            post.setLikes(likes)
        }

        return allPosts
    }

    public deletePost = async(input: IDeletePostInput) => {
        const { token, postId } = input

        if(!token) {
            throw new Error("É necessário passar um token de autorização.")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new Error("Usuário não autorizado.")
        }

        const post = await this.postDatabase.searchPostById(postId)

        if(!post) {
            throw new Error("Post não encontrado.")
        }

        const userId: string = post.userId

        if(payload.role !== "ADMIN" && userId !== payload.id) {
            throw new Error("Este usuário não tem autorização para deletar este post.")
        }

        await this.postDatabase.deletePost(postId)
    }
}