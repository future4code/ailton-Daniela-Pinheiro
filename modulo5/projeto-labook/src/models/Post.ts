export interface ICreatePostInput {
    token: string,
    content: string
}

export interface IModifyPostInput {
    token: string,
    postId: string
}

export interface ILikesInput {
    postId: string,
    userId: string
}

export interface IPutLikeInput {
    id: string,
    postId: string,
    userId: string
}

export interface IPostDB {
    id: string,
    content: string,
    userId: string,
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) {}

    public getId = (): string => {
        return this.id
    }

    public getContent = (): string => {
        return this.content
    }

    public getUserId = (): string => {
        return this.userId
    }

    public getLikes = (): number => {
        return this.likes
    }

    public setLikes = (likes: number) => {
        this.likes = likes
    }
}