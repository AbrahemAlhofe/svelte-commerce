import type { Product } from '$lib/types';
import { json } from '@sveltejs/kit';
import database from '$lib/server/database';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    
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

    return json(products);

}