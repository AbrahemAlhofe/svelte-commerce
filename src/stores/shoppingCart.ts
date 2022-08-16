import { writable } from "svelte/store";
import type { ShoppingCartItem } from '$lib/types';
import { faker } from "@faker-js/faker";

export const shoppingCart = (() => {

    const { subscribe, set, update } = writable<ShoppingCartItem[]>(new Array(2).fill(null).map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        thumbnail: faker.image.food(80, 80, true),
        price: Number.parseInt(faker.commerce.price()),
        quantity: 1
    })));

    return {

        subscribe,

        addItem: (item: ShoppingCartItem) => update(shoppingCart => { shoppingCart.push(item); return shoppingCart }),

        removeItem: (index: number) => update(shoppingCart => shoppingCart.filter((_, i) => i !== index)),

        increaseItemQuantity: (index: number) => update(shoppingCart => { shoppingCart[index].quantity += 1; return shoppingCart}),
        
        decreaseItemQuantity: (index: number) => update(shoppingCart => { shoppingCart[index].quantity -= 1; return shoppingCart})

    }

})()
