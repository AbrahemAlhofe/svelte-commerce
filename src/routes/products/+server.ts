import type { Product } from '$lib/types';
import { json } from '@sveltejs/kit';
import * as edgedb from 'edgedb';

const client = edgedb.createClient();

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    
    const products: Array<Product> = await client.query(`select Product {
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