<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import SearchIcon from '$lib/icons/SearchIcon.svelte';
	  import { setContext } from 'svelte';
  
    export let value = '';
    function submit() {
      setContext("query", value);
      if ($page.url.pathname !== 'search') goto(`/search?query=${value}`);
    }
  </script>
  
  <form on:submit|preventDefault={submit} class="flex focus-within:border-white w-full items-center h-full items-center border border-white/30 bg-transparent gap-2 rounded">
    <div class="w-fit inline-block p-2">
      <SearchIcon color="white"/>
    </div>
    <input
      bind:value
      placeholder="Search for products..."
      class="h-full grow border-none bg-transparent text-white outline-none pr-2"
    />
  </form>
  
  <style>
    input::placeholder {
      color: rgb(85, 85, 85);
    }
  </style>