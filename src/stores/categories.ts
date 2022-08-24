import { readable } from 'svelte/store';
import type { Category } from '$lib/types';
import { faker } from '@faker-js/faker';

export const categories = readable<Category[]>([
    {
        id: faker.datatype.uuid(),
        name: "clothes",
        properties: {
            color: ["white", "black"],
            size: ["small", "medium", "large"]
        }
    },
    {
        id: faker.datatype.uuid(),
        name: "cups",
        properties: {
            color: ["white", "black"],
            texture: ["sharp", "flat"]
        }
    }
]);