import { ILikesInput, IPostDB, IPutLikeInput, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async(input: Post) => {
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
            .insert({
                id: input.getId(),
                content: input.getContent(),
                user_id: input.getUserId()
            })
    }

    public getPosts = async(): Promise<IPostDB[]> => {
        const result = await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
            .select('*')

        const posts: IPostDB[] = result && result.map(post => {
            return {
                id: post.id,
                content: post.content,
                userId: post.user_id
            }
        })
        
        return posts
    }

    public getLikes = async(postId: string): Promise<number | string> => {
        const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
            .count('id as likes')
            .where({ post_id: postId })

        return result[0].likes
    }

    public searchPostById = async(postId: string): Promise<IPostDB | undefined> => {
        const result = await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
            .select('*')
            .where({ id: postId })

        if(!result.length) {
            return undefined
        } else {
            const post: IPostDB = {
                id: result[0].id,
                content: result[0].content,
                userId: result[0].user_id
            }
      
            return post
        }
    }

    public deletePost = async(postId: string) => {
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
            .delete('*')
            .where({ id: postId })
    }

    public getLikesByUser = async(input: ILikesInput): Promise<number | string> => {
        const{ userId, postId } = input

        const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
            .count('id as likes')
            .where({ post_id: postId, user_id: userId })

        return result[0].likes
    }

    public createLike = async(input: IPutLikeInput) => {
        const{ id, userId, postId } = input

        await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
            .insert({
                id: id,
                post_id: postId,
                user_id: userId
            })
    }

    public getLikeId = async(input: ILikesInput): Promise<string> => {
        const{ userId, postId } = input

        const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
            .select('id')
            .where({ post_id: postId, user_id: userId })

        return result[0].id
    }

    public deleteLike = async(id: string) => {
        await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
            .delete('*')
            .where({ id })
    }
}