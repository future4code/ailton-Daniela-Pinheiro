import { Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"

    public createPost = async(input: Post) => {
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
            .insert({
                id: input.getId(),
                content: input.getContent(),
                user_id: input.getUserId()
            })
    }
}