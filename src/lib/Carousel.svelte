<script lang="ts">
  
  import type { Product } from '$lib/types';

  export let items: Product[] = [];

  let isFocused = false;

</script>

<div class="slider relative w-full overflow-scroll bg-light" class:slider--paused={isFocused} >
  <div class="slide-track flex my-4 gap-2">
    {#each items as item (item.id)}
      <a on:mouseover={() => isFocused = true} on:focus={() => isFocused = true} on:mouseout={() => isFocused = false} on:blur={() => isFocused = false} href={`/products/${item.id}`} class="slide relative h-[20vh] flex-none md:w-1/3 rounded-md overflow-hidden">
        <img
          alt={item.name}
          class="h-full"
          decoding="async"
          loading="lazy"
          src={item.thumbnail}
        />
        <div class="absolute top-0 left-0 z-40 bg-black p-4 text-white">{item.name}</div>
      </a>
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