<script>
	import PageIcon from '$lib/icons/PageIcon.svelte';
  import ServerIcon from '$lib/icons/ServerIcon.svelte';
  import { page } from '$app/stores';
  import { dev } from '$app/environment';
</script>
  

{#if $page.status >= 500}

  <div class="flex h-screen flex-col items-center justify-center">
    <div class="flex w-auto flex-col items-center justify-center p-6 md:p-0 max-w-[100%]">
      <div class="mb-8 flex w-full items-center">
        <div class="flex flex-none items-center justify-center rounded-md bg-white flex-col p-3 gap-2">
          <div><ServerIcon /></div>
          <div>{ $page.status }</div>
        </div>
        <div class="mx-6 h-20 w-px bg-white" />
        <div class="text-lg font-medium">Sorry! But there is an Internal Server Error</div>
      </div>
      {#if dev}
        <pre
          href="/"
          class="w-full p-3 text-sm font-medium uppercase text-black max-h-[35vh] overflow-auto"
        >{ $page.error.stack }</pre>
      {/if}
    </div>
  </div>

  {:else if $page.status >= 400}

    <div class="flex h-screen flex-col items-center justify-center">
      <div class="flex w-auto flex-col items-center justify-center p-6 md:p-0 max-w-[100%]">
        <div class="mb-8 flex w-full items-center">
          <div class="flex flex-none items-center justify-center rounded-md bg-white flex-col p-3 gap-2">
            <div><PageIcon /></div>
            <div>{ $page.status }</div>
          </div>
          <div class="mx-6 h-20 w-px bg-white" />
          <div class="text-lg font-medium">Opps! The page you're looking for doesn't exist.</div>
        </div>
        <a
          href="/"
          sveltekit:prefetch
          class="w-full bg-white/90 p-3 text-center text-sm font-medium uppercase text-black hover:bg-white/100"
        >
          Return to Home Page
        </a>
      </div>
    </div>

{/if}