<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Grid from '$lib/grid/Grid.svelte';
	import { products } from '$stores/products';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Grid products={$products} />