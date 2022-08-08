<script lang="ts">

    import type { Product } from "./types";
    import GridTile from "$lib/GridTile.svelte";
        
    export let products: Product[];

</script>

<div class="h-[50vh] w-full flex gap-2">
  <div class="w-2/3">
    <GridTile bind:product={products[0]}/>
  </div>
  <div class="w-1/3 flex flex-col gap-2">
    <div class="w-full h-1/2">
      <GridTile bind:product={products[1]}/>
    </div>
    <div class="w-full grow">
      <GridTile bind:product={products[2]}/>
    </div>
  </div>
</div>
