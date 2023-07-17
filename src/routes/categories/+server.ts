import type { Product } from '$lib/types';
import { json } from '@sveltejs/kit';
import database from '$lib/server/database';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    
    const categories: Array<Product> = await database.query(`select Category {
        id,
        name,
        properties
    }`);  

    return json(categories);

}