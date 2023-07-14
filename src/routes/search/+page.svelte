<script lang="ts">
	import GridTile from '$lib/components/GridTile.svelte';
	import { products } from '$stores/products';
	import { query } from '$stores/search';
	import { categories } from '$stores/categories';
	import type { Product } from '$lib/types';
    import FrownIcon from '$lib/icons/FrownIcon.svelte';

	let targetCategoryId: string | null = null;
	let targetProperties: Product['properties'] = {};

	$: properties = $categories.find(category => category.id === targetCategoryId)?.properties;

	$: matchedProducts = $products
		.filter(item => {
			if (!targetCategoryId) return item;
			if (item.category.id === targetCategoryId) return item;
		})
		.filter(item => {
			const isTargetPropertiesEmpty = Object.entries(targetProperties).length === 0;
			if ( isTargetPropertiesEmpty ) return true;
			for (let name in targetProperties) {
				const hasTargetProperty = item.properties[name].includes(targetProperties[name]);
				if ( !hasTargetProperty ) return false;
			}
			return true;
		})
		.filter((item) => {
			if (!query) return item;
			if (item.name.toLowerCase().includes($query.toLowerCase())) return item;
		});

</script>

<div class="w-full flex gap-5">
	<div class="bg-black w-1/4 h-[85vh] rounded p-5">
		<section>
			<h3 class="text-white text-2xl mb-3">Categories</h3>
			<ul class="flex flex-wrap gap-2">
				{#each $categories as category}
					<li
						on:click={() => targetCategoryId = category.id}
						class={`${category.name.length <= 3 ? 'w-12' : 'px-2'} ${
							targetCategoryId === category.id ? 'opacity-100' : 'opacity-60'
						} text-white cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:opacity-100 border-white h-12 flex items-center justify-center rounded-full border`}>
						{category.name}
					</li>
				{/each}
			</ul>
		</section>
		{#if properties}
		<hr class="my-5"/>
		<section>
			<h4 class="text-white text-2xl mb-3">Properties</h4>
			<ul>
				{#each Object.entries(properties) as [name, values]}
					<li class="text-white my-2">
						<span>{name}</span>
						<ul class="flex flex-wrap gap-2">
							{#each values as value}
								<li
									on:click={() => targetProperties[name] = value}
									class={`${value.length <= 3 ? 'w-12' : 'px-2'} ${
										targetProperties[name] === value ? 'opacity-100' : 'opacity-60'
									} text-white cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:opacity-100 border-white h-12 flex items-center justify-center rounded-full border`}>
									{value}
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</section>
		{/if}
	</div>
	<div class="grow">

		{#if matchedProducts.length !== 0}
		
			<ul class="grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-3">
				{#each matchedProducts as product, i (product.id)}
					<li class="max-w-md">
						<div class="group relative block aspect-square overflow-hidden bg-dark">
							<GridTile href={`/products/${product.id}`} name={product.name} thumbnail={product.thumbnail} />
						</div>
					</li>
				{/each}
			</ul>

		{:else}

			<div class="flex h-screen flex-col items-center justify-center ">
				<div class="flex w-auto flex-col items-center justify-center p-6 md:p-0">
				<div class="flex w-full items-center">
					<div class="flex flex-none items-center justify-center rounded-full bg-white p-4">
					<FrownIcon />
					</div>
					<div class="mx-6 h-20 w-px bg-white" />
					<div class="text-lg font-medium">Sorry, But the product you're looking for doesn't exist.</div>
				</div>
				</div>
			</div>

		{/if}


	</div>
</div>
