<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import { products } from '$stores/products';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="max-w-[1024px] w-full m-auto">
	<section>
		<div>
			<Grid products={$products} />
		</div>
	</section>
	
	<section>
		<Carousel items={$products} />
	</section>
</div>
