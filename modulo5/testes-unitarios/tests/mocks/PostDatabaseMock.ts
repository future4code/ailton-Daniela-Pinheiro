import { ILikeDB, IPostDB, Post } from "../../src/models/Post"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => {}

    public getPosts = async (): Promise<IPostDB[]> => {
        const postsDB: IPostDB[] = [
            {
                id: "01",
                content: "First",
                user_id: "01"
            },
            {
                id: "02",
                content: "Rubinhooo",
                user_id: "01"
            },
            {
                id: "03",
                content: "Sei lá",
                user_id: "05"
            }
        ]

        return postsDB
    }

    public getLikes = async (postId: string): Promise<number> => {
        return 0
    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
        return undefined
    }

    public deletePost = async (postId: string): Promise<void> => {}

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        return undefined
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {}

    public removeLike = async (postId: string, userId: string): Promise<void> => {}
}