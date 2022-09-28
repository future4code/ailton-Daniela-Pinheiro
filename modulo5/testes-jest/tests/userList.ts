export interface User {
    id: string,
    name: string,
    email: string
}

export const userList: User[] = [
    {
        id: "01",
        name: "Fulano",
        email: "fufu@email.com"
    },
    {
        id: "02",
        name: "Astrodev",
        email: "astrodev@email.com"
    },
    {
        id: "03",
        name: "Beltrano",
        email: "beltrano@email.com"
    }
]