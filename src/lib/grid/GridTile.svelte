<script lang="ts">

    import type { Product } from "./types";
        
    export let product: Product;

</script>

<div class="h-full w-full bg-indigo-600 overflow-hidden rounded">
    <div class="relative flex h-full w-full items-center justify-center">
      <img
        src="{product.thumbnail}"
        class="w-full md:w-1/2 lg:w-full flex-none transition duration-300 ease-in-out"
        alt=""
      />
      <div class="text-white absolute top-0 left-0 m-5">
        <div class="rounded bg-black p-3 text-2xl font-medium mb-3">{product.name}</div>
        <div class="rounded w-fit bg-black p-3 text-sm">{product.description}</div>
      </div>
    </div>
</div>