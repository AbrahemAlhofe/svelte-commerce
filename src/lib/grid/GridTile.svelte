<script lang="ts">

    import type { Product } from "$lib/types";
        
    export let price: number | undefined = undefined;
    export let name: Product["name"] | undefined = undefined;
    export let description: Product["description"] | undefined = undefined;
    export let thumbnail: Product["thumbnail"] | undefined = undefined;
    export let href: string | undefined = undefined;

</script>

<div class="h-full w-full bg-indigo-600 overflow-hidden rounded">
  <svelte:element this={href === undefined ? "div" : "a"} href="{href}" class="relative flex h-full w-full items-center justify-center" on:mouseover on:mouseout on:focus on:blur>
    {#if thumbnail}
      <img
        src="{thumbnail}"
        class="w-full md:w-1/2 lg:w-full flex-none transition duration-300 ease-in-out"
        alt=""
      />
    {/if}
    <div class="text-white absolute top-0 left-0 m-5">
      {#if name} <div class="rounded bg-black p-3 text-2xl font-medium mb-3">{name}</div> {/if}
      {#if description} <div class="rounded w-fit bg-black p-3 text-sm">{description}</div> {/if}
    </div>
    <div class="text-white absolute bottom-0 right-0 m-5">
      {#if price !== undefined} <div class="rounded bg-black p-3 mb-3 font-bold">${price}</div> {/if}
    </div>
  </svelte:element>
</div>