<script lang="ts">
	import ShoppingBagIcon from '$lib/icons/ShoppingBagIcon.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

</script>

<header class="bg-black h-[7.5vh] rounded-b p-2 flex items-center justify-between">

	<div class="text-white">
		SvelteECommerce
	</div>
	
	<div>
		
		<button class="pointer" on:click="{ () => dispatch("openCart") }">
			<ShoppingBagIcon color="white" />
		</button>

	</div>

</header>