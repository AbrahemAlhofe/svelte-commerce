export interface Category {
    id: string;
    name: string;
    properties: {
        [name: string]: Array<string>
    }
}

export interface Product {
    id: string;
    name: string;
    thumbnail: string;
    description: string;
    price: number;
    properties: {
        [name: string]: string
    };
    category: Category
}

export interface ShoppingCartItem extends Product {
    quantity: number,
    properties: {
        [name: string]: string
    }
}