export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    purchases?: Purchase[]
}

export type Product = {
    id: string,
    name: string,
    price: number,
    imageUrl: string
}

export type Purchase = {
    id: string,
    userId: string,
    productId: number,
    quantity: number,
    totalPrice: number
}