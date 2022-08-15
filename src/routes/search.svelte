<script>
	import GridTile from '$lib/grid/GridTile.svelte';
	import { products } from '$stores/products';
	import { page } from '$app/stores';

	const query = $page.url.searchParams.get('query');

	$: matchedProducts = $products.filter((item) => {
		if (query === null) return item;
		if (item.name.toLowerCase().includes(query.toLowerCase())) return item;
	});
</script>

<div>
	<ul class="grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-3">
		{#each matchedProducts as product, i (product.id)}
			<li class="max-w-md">
				<div class="group relative block aspect-square overflow-hidden bg-dark">
					<GridTile href={`/products/${product.id}`} name={product.name} thumbnail={product.thumbnail} />
				</div>
			</li>
		{/each}
	</ul>
</div>
