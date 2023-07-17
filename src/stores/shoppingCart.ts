import { writable } from "svelte/store";
import type { ShoppingCartItem } from '$lib/types';

export const shoppingCart = (() => {

    const { subscribe, update } = writable<ShoppingCartItem[]>([]);

    return {

        subscribe,

        addItem: (item: ShoppingCartItem) => update(shoppingCart => { shoppingCart.push(item); return shoppingCart }),

        removeItem: (index: number) => update(shoppingCart => shoppingCart.filter((_, i) => i !== index)),

        increaseItemQuantity: (index: number) => update(shoppingCart => { shoppingCart[index].quantity += 1; return shoppingCart}),
        
        decreaseItemQuantity: (index: number) => update(shoppingCart => { shoppingCart[index].quantity = Math.max(shoppingCart[index].quantity - 1, 0); return shoppingCart})

    }

})()
