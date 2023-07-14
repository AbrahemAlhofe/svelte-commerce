import type { Product } from '$lib/types';
import { json } from '@sveltejs/kit';
import * as edgedb from 'edgedb';

const client = edgedb.createClient();

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    
    const categories: Array<Product> = await client.query(`select Category {
        id,
        name,
        properties
    }`);  

    return json(categories);

}