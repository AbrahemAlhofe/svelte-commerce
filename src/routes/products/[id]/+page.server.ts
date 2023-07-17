import type { Product } from '$lib/types';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import database from '$lib/server/database.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    
    try {

        const [product]: Product[] = await database.query(`select Product {
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

        const products: Product[] = await database.query(`select Product {
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

        return { product, products };

    } catch (exception) {

        throw error(404, 'Not found');
        
    }

}