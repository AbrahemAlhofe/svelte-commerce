<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ShoppingCart from '$lib/components/ShoppingCart.svelte';
	import '../app.css';

	let isCartOpen = false;

</script>

<Header on:openCart={() => isCartOpen = true}/>

{#if isCartOpen} <ShoppingCart on:closeCart={() => isCartOpen = false} /> {/if}

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

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
