import { writable } from "svelte/store";
import type { ShoppingCartItem } from '$lib/types';
import { faker } from "@faker-js/faker";

export const shoppingCart = writable<ShoppingCartItem[]>(new Array(2).fill(null).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    thumbnail: faker.image.food(80, 80, true),
    price: Number.parseInt(faker.commerce.price()),
    quantity: 1
})));