<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import type { Product } from '$lib/types';

	export let data: { products: Product[] };

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="max-w-[1024px] w-full m-auto">
	<section>
		<div>
			<Grid products={data.products} />
		</div>
	</section>
	
	<section>
		<Carousel items={data.products} />
	</section>
</div>
