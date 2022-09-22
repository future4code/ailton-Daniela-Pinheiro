export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number
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

    // public setLikes = () => {
    //     this.id += 1
    // }
}