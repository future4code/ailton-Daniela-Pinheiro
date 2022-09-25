import { IPostDB, Post } from "../models/Post"
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
            .select()
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
}