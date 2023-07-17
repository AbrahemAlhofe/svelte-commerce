import type { Product } from '$lib/types';
import database from '$lib/server/database';

/** @type {import('./$types').RequestHandler} */
export async function load() {
    
    const products: Array<Product> = await database.query(`select Product {
        id,
        name,
        description,
        thumbnail,
        price,
        properties,
        category: {
            id,
            name,
            properties
        }    
    }`);    

    return { products };

}