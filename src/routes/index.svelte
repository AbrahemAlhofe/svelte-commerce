<script context="module" lang="ts">
	import Carousel from '$lib/Carousel.svelte';
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

<section>
	<div>
		<Grid products={$products} />
	</div>
</section>

<section>
	<Carousel items={$products} />
</section>
