<script lang="ts">
	import { fly } from 'svelte/transition';

	let showSearchBar: Boolean = false;

	const handleOnClick = () => showSearchBar = showSearchBar ? false : true
	
</script>

{#if showSearchBar}
	<div in:fly={{x:100}} out:fly={{x:100}} class="form-control px-2">
		<input type="text" placeholder="Search" class="input input-bordered" />
	</div>
{/if}

<button on:click={handleOnClick} class="btn btn-ghost btn-circle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
		/></svg
	>
</button>
