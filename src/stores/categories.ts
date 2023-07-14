import { readable } from 'svelte/store';
import type { Category } from '$lib/types';

export const categories = readable<Category[]>([], (set) => {
    
    (async () => {
        
        const categories: Array<Category> = await fetch("http://127.0.0.1:5173/categories").then(response => response.json())
    
        set(categories);

    })()

});