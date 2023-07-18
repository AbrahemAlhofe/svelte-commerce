<script lang="ts">
  
  import type { Product } from '$lib/types';
  import GridTile from '$lib/components/GridTile.svelte';

  export let items: Product[] = [];

  let isFocused = false;

</script>

<div class="slider relative w-full overflow-scroll bg-light" class:slider--paused={isFocused} >
  <div class="slide-track flex my-4 gap-2">
    {#each items as item (item.id)}
      <div class="slide relative h-[20vh] flex-none w-full md:w-1/3 rounded-md overflow-hidden">
        <GridTile {...{...item, description: undefined, href: `/products/${item.id}` }} on:mouseover={() => isFocused = true} on:focus={() => isFocused = true} on:mouseout={() => isFocused = false} on:blur={() => isFocused = false} href={`/products/${item.id}`}/>
      </div>
    {/each}
  </div>
</div>

<style>
  @-webkit-keyframes scroll {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(calc(-250px * 7));
      transform: translateX(calc(-250px * 7));
    }
  }

  @keyframes scroll {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(calc(-250px * 7));
      transform: translateX(calc(-250px * 7));
    }
  }

  .slider::after {
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }

  .slider .slide-track {
    -webkit-animation: scroll 40s linear infinite;
    animation: scroll 40s linear infinite;
  }

  .slider.slider--paused .slide-track {
    animation-play-state: paused !important;
  }

</style>