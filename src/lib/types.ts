type UUID = string;

type CategoryProperty = string;
type CategoryValue = string;

export interface Category {
    id: UUID;
    name: string;
    properties: Record<CategoryProperty, CategoryValue[]>
}

export interface Product {
    id: UUID;
    name: string;
    thumbnail: string;
    description: string;
    price: number;
    properties: Record<CategoryProperty, CategoryValue>
    category: Category
}

export interface ShoppingCartItem extends Product {
    quantity: number,
    properties: Record<CategoryProperty, CategoryValue>
}