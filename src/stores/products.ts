import { readable } from 'svelte/store';
import type { Product } from '$lib/types';

export const products = readable<Product[]>([], (set) => {

    (async () => {

        const products: Array<Product> = await fetch("http://127.0.0.1:5173/products").then(response => response.json());
    
        console.debug({ products })

        set(products);
        
    })()

})