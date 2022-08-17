export type Produto = {
    id: string,
    name: string,
    price: number
}

export const produtos: Produto[] = [
    {
        id: "1",
        name: "Potion",
        price: 200
    },
    {
        id: "2",
        name: "Full Restore",
        price: 1000
    },
    {
        id: "3",
        name: "Elixir",
        price: 400
    },
    {
        id: "4",
        name: "Fresh Water",
        price: 150
    }
]