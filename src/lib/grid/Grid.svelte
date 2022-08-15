<script lang="ts">

    import type { Product } from "$lib/types";
    import GridTile from "$lib/grid/GridTile.svelte";
        
    export let products: Product[];

</script>

<div class=" w-full flex gap-2 flex-col | md:h-[50vh] md:flex-row">
  <div class="w-full | md:w-2/3">
    <GridTile {...{...products[0], href: `/products/${products[0].id}`}}/>
  </div>
  <div class="flex flex-col gap-2 w-full | md:w-1/3">
    <div class="w-full h-full | md:h-1/2">
      <GridTile {...{...products[1], href: `/products/${products[1].id}`}}/>
    </div>
    <div class="w-full grow h-[0px]">
      <GridTile {...{...products[2], href: `/products/${products[2].id}`}}/>
    </div>
  </div>
</div>
