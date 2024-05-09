export interface Categories {
    id: number,
    imageUrl: string,
    name: string,
    orderBy: number
}

export interface Product {
    id: number,
    name: string,
    inStock: boolean,
    price: number,
    description: string,
    thumbnailUrl: string,
    count: number
}
