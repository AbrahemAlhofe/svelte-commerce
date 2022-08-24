<script lang="ts">
	import ShoppingBagIcon from '$lib/icons/ShoppingBagIcon.svelte';
	import { createEventDispatcher } from 'svelte';
	import { shoppingCart } from '$stores/shoppingCart'; 
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { page } from '$app/stores';

	const dispatch = createEventDispatcher();
	
	const searchQuery = $page.url.searchParams.get('query') ?? undefined;

</script>

<header class="bg-black h-[7.5vh] rounded-b p-2 flex items-center justify-between">

	<div class="text-white">
		SvelteECommerce
	</div>

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