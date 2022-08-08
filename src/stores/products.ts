import { readable } from 'svelte/store';
import type { Product } from '$lib/types';
import { faker } from '@faker-js/faker';

export const products = readable<Product[]>(new Array(10).fill(null).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    thumbnail: "faker.image.food(1234, 2345, true)",
    price: Number.parseInt(faker.commerce.price())
})));