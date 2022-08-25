<script lang="ts">
	import GridTile from '$lib/components/GridTile.svelte';
	import { products } from '$stores/products';
	import { page } from '$app/stores';
	import { categories } from '$stores/categories';

	let query = $page.url.searchParams.get('query');
	let targetCategory: string | null = null;

	$: matchedProducts = $products
		.filter(item => {
			if (!targetCategory) return item;
			if (item.category === targetCategory) return item;
		})
		.filter((item) => {
			if (!query) return item;
			if (item.name.toLowerCase().includes(query.toLowerCase())) return item;
		});

</script>

<div class="w-full flex gap-5">
	<div class="bg-black w-1/4 h-[85vh] rounded p-5">
		<section>
			<h3 class="text-white text-2xl mb-3">Categories</h3>
			<ul class="flex flex-wrap gap-2">
				{#each $categories as category}
					<li
						on:click={() => targetCategory = category.id}
						class={`${category.name.length <= 3 ? 'w-12' : 'px-2'} ${
							targetCategory === category.id ? 'opacity-100' : 'opacity-60'
						} text-white cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:opacity-100 border-white h-12 flex items-center justify-center rounded-full border`}>
						{category.name}
					</li>
				{/each}
			</ul>
		</section>
	</div>
	<div class="grow">
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
</div>
