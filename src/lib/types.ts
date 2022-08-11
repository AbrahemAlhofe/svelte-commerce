export interface Product {
    id: string;
    name: string;
    thumbnail: string;
    description: string;
    price: number;
}

export interface ShoppingCartItem extends Product {
    quantity: number
}