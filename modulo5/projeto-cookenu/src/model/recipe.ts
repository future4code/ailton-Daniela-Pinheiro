export class Recipe {
    constructor(
        private id: string,
        public title: string,
        public description: string,
        private createdAt: Date,
        private creatorId: string
    ) {}

    getId(): string {
        return this.id
    }
    getTitle(): string {
        return this.title
    }
    getDescription(): string {
        return this.description
    }
    getCreatedAt(): Date {
        return this.createdAt
    }
    getCreatedAtString(): string {
        const day: string = String(this.createdAt.getDate())
        const month: string = String(this.createdAt.getMonth() + 1)
        const year: string = String(this.createdAt.getFullYear())

        const date: string = day + "/" + month + "/" + year

        return date
    }
    getCreatorId(): string {
        return this.creatorId
    }
}