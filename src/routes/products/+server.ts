import type { Product } from '$lib/types';
import { json } from '@sveltejs/kit';
import * as edgedb from 'edgedb';
import type { ConnectConfig } from 'edgedb/dist/conUtils';
import { DATABASE_SERVER_URL, DATABASE_TLS_SECURITY } from '$env/static/private';

const client = edgedb.createClient({
    dsn: DATABASE_SERVER_URL,
    tlsSecurity: DATABASE_TLS_SECURITY as ConnectConfig['tlsSecurity']
});

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