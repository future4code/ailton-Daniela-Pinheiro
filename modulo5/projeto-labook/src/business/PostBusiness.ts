import { PostDatabase } from "../data/PostDatabase"
import { ICreatePostInput, IModifyPostInput, ILikesInput, IPutLikeInput, Post } from "../models/Post"
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

    public deletePost = async(input: IModifyPostInput) => {
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

    public likePost = async(input: IModifyPostInput) => {
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
        
        const inputLikes: ILikesInput = {
            userId: payload.id,
            postId: postId
        }
        
        const likes: number = await this.postDatabase.getLikesByUser(inputLikes) as number
        
        if(likes > 0) {
            throw new Error("Este usuário já curtiu este post.")
        }
        
        const id: string = this.idGenerator.generateId()
        const newLike: IPutLikeInput = {
            id: id,
            userId: payload.id,
            postId: postId
        }

        await this.postDatabase.createLike(newLike)
    }

    public dislikePost = async(input: IModifyPostInput) => {
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


        const inputLikes: ILikesInput = {
            userId: payload.id,
            postId: postId
        }

        const likes: number = await this.postDatabase.getLikesByUser(inputLikes) as number

        if(likes === 0) {
            throw new Error("Não é possível descurtir este post.")
        }

        const id: string = await this.postDatabase.getLikeId(inputLikes)
        
        await this.postDatabase.deleteLike(id)
    }
}