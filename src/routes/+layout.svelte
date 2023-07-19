<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ShoppingCart from '$lib/components/ShoppingCart.svelte';
	import '../app.css';

	import { setContext } from 'svelte';
	import { readable, writable } from 'svelte/store';
	import type { Category, ShoppingCartItem } from '../lib/types';

	const shoppingCart = (() => {

		const { subscribe, update } = writable<ShoppingCartItem[]>([]);

		return {

			subscribe,

			addItem: (item: ShoppingCartItem) => update(shoppingCart => { shoppingCart.push(item); return shoppingCart }),

			removeItem: (index: number) => update(shoppingCart => shoppingCart.filter((_, i) => i !== index)),

			increaseItemQuantity: (index: number) => update(shoppingCart => { shoppingCart[index].quantity += 1; return shoppingCart}),
			
			decreaseItemQuantity: (index: number) => update(shoppingCart => { shoppingCart[index].quantity = Math.max(shoppingCart[index].quantity - 1, 0); return shoppingCart})

		}

	})()
	
	setContext('shoppingCart', shoppingCart);

	const query = writable("");

	setContext("query", query);

	const categories = readable<Category[]>([], (set) => {
    
		(async () => {
			
			const categories: Array<Category> = await fetch("http://127.0.0.1:5173/categories").then(response => response.json())
		
			set(categories);

		})()

	});

	setContext("categories", categories);

	let isCartOpen = false;

</script>

<Header on:openCart={() => isCartOpen = true}/>

{#if isCartOpen} <ShoppingCart on:closeCart={() => isCartOpen = false} /> {/if}

<main class="relative bg-transparent overflow-hidden">
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
