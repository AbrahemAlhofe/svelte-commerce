<script lang="ts">
	import ShoppingBagIcon from '$lib/icons/ShoppingBagIcon.svelte';
	import { createEventDispatcher } from 'svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import type { ShoppingCartItem } from '../types';
	import type { Writable } from 'svelte/store';

	const shoppingCart = getContext<Writable<ShoppingCartItem[]>>("shoppingCart");

	const dispatch = createEventDispatcher();
	
	const searchQuery = $page.url.searchParams.get('query') ?? undefined;

</script>

<header class="bg-black h-[7.5vh] rounded-b p-2 flex items-center justify-between">

	<a href="/" class="hidden text-white !no-underline sm:block">
		SvelteECommerce
	</a>

	<div class="h-full">
		<SearchBar value="{searchQuery}"/>
	</div>
	
	<div>
		
		<button class="pointer relative" on:click="{ () => dispatch("openCart") }">
			<ShoppingBagIcon color="white" />
			<div class="bg-gray-400 text-white rounded text-xs absolute px-1 bottom-0 left-0 -ml-2 -mb-2">{$shoppingCart.length}</div>
		</button>

	</div>

</header>