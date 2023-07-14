import type { Product } from '$lib/types';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import * as edgedb from 'edgedb';

const client = edgedb.createClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    
    try {

        const data: Product[] = await client.query(`select Product {
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
        }
            filter .id = <uuid>"${params.id}"`);    

        return data[0];

    } catch (exception) {

        throw error(404, 'Not found');
        
    }

}