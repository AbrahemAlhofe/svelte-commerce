import { derived, type Readable } from 'svelte/store';
import type { Category, Product } from '$lib/types';
import { faker } from '@faker-js/faker';
import { categories } from './categories';

const clothes: Product[] = new Array(3).fill(null).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    thumbnail: faker.image.food(1200, 800, true),
    price: Number.parseInt(faker.commerce.price()),
    properties: {
        color: faker.helpers.arrayElement(["white", "black"]),
        size: faker.helpers.arrayElement(["small", "medium", "large"])
    },
    category: ""
}));

const cups = new Array(3).fill(null).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    thumbnail: faker.image.food(1200, 800, true),
    price: Number.parseInt(faker.commerce.price()),
    properties: {
        color: faker.helpers.arrayElement(["white", "black"]),
        texture: faker.helpers.arrayElement(["sharp", "flat"])
    },
    category: ""
}));

export const products = derived<Readable<Category[]>, Product[]>(
    categories,
    ($categories, set) => set(faker.helpers.shuffle([

        ...clothes.map(product => ({ ...product, category: ($categories.find(category => category.name === "clothes") as Category).id })),

        ...cups.map(product => ({ ...product, category: ($categories.find(category => category.name === "cups") as Category).id }))

    ]))
);