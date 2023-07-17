<script lang="ts">
	// types
	import type { Product } from '$lib/types';

	// stores
	import { shoppingCart } from '$stores/shoppingCart';

	// components
	import GridTile from '$lib/components/GridTile.svelte';
	import StarIcon from '$lib/icons/StarIcon.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Loader from '$lib/components/Loader.svelte';
	
	/** @type {import('./$types').PageData} */
	export let data: { product: Product, products: Product[] };

	$: product = data.product;
	$: item = { ...product, quantity: 1 };

	let addToCartProcess: Promise<void> = Promise.resolve();
	function addToCart() {
		if (product) {
			addToCartProcess = new Promise((resolve, reject) => {
				setTimeout(() => {
					shoppingCart.addItem(item);
					resolve();
				}, 2000);
			});
		}
	}

</script>

<svelte:head>
	{#if product}
		<title>{product.name}</title>
	{/if}
</svelte:head>

<div class="max-w-[1024px] w-full m-auto">
	{#if product}
		<div class="flex flex-col md:flex-row">
			<div class="md:h-90 md:w-2/3">
				<!-- {#key highlightedImageSrc} -->
				<div class="relative h-full bg-light">
					<GridTile name={product.name} thumbnail={product.thumbnail} />
					<!-- {#if product?.images?.edges.length > 1}
                        <div class="absolute right-0 bottom-0 z-40 p-6 ">
                            <button
                                on:click={() => {
                                    changeHighlightedImage('back');
                                }}
                                class="border border-b border-t border-l border-black py-4 px-8"
                                ><Icons type="arrowLeft" /></button
                            >
                            <button
                                on:click={() => {
                                    changeHighlightedImage('next');
                                }}
                                class="-ml-1 border border-black py-4 px-8"><Icons type="arrowRight" /></button
                            >
                        </div>
                    {/if} -->
				</div>
				<!-- {/key} -->
				<!-- <div class="flex h-1/5 ">
					{#each product.images.edges as variant, i}
						<div class="h-full w-1/4 bg-white">
							<GridTile
								on:click={() => {
									currentImageIndex = i;
								}}
								imageSrc={variant.node.originalSrc}
								removeLabels={true}
							/>
						</div>
					{/each}
				</div> -->
			</div>
			<div class="h-full p-6 md:w-1/3">
				{#each Object.entries(product.category.properties) as [name, values]}
					<div class="mb-8">
						<div class="mb-4 text-sm uppercase tracking-wide">{name}</div>
						<div class="flex">
							{#each values as value}
								<button
									on:click={() => {
										item.properties[name] = value;
									}}
									class={`${value.length <= 3 ? 'w-12' : 'px-2'} ${
										item.properties[name] === value ? 'opacity-100' : 'opacity-60'
									} transition duration-300 ease-in-out hover:scale-110 hover:opacity-100 border-white h-12 mr-3 flex items-center justify-center rounded-full border`}
								>
									{value}
								</button>
							{/each}
						</div>
					</div>
				{/each}
				<p class="text-sm">{product.description}</p>
				<div class="mt-8 flex items-center justify-between">
					<div class="flex items-center">
						<div class="mr-1">
							<StarIcon />
						</div>
						<div class="mr-1">
							<StarIcon />
						</div>
						<div class="mr-1">
							<StarIcon />
						</div>
						<div class="mr-1">
							<StarIcon />
						</div>
						<div class="mr-1 opacity-50">
							<StarIcon />
						</div>
					</div>
					<div class="text-sm opacity-50">36 Reviews</div>
				</div>
				<button
					on:click={addToCart}
					class="mt-6 flex w-full items-center justify-center bg-light p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100 bg-black"
				>
					{#await addToCartProcess}
						<Loader color="#aaa" />
					{:then}
						<span>Add To Cart</span>
					{/await}
				</button>
				<!-- <DescriptionToggle
					title="Care"
					description="This is a limited edition production run. Printing starts when the drop ends."
				/>
				<DescriptionToggle
					title="Details"
					description="This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19."
				/> -->
			</div>
		</div>
		<div class="px-4 py-8">
			<div class="mb-4 text-3xl font-bold">Related Products</div>
            <Carousel items={data.products}/>
		</div>
	{/if}
</div>