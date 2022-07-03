<script lang="ts">
	import { fly } from 'svelte/transition';
	import MenuIconSVG from '../../static/icons/MenuIconSVG.svelte'
	let showMenu: Boolean | null = false;

	const handleOnClick = () => {
		console.log('onclick');
		showMenu = showMenu ? false : true;
	};
	const handleOnBlur = () => {
		console.log('onblur');
		showMenu = showMenu ? false : null;
	};
</script>

<div on:click={handleOnClick} on:blur={handleOnBlur} tabindex="0" class="relative inline-block">
	<label class="btn btn-ghost btn-circle" for="">
		<MenuIconSVG />
	</label>
	{#if showMenu}
		<ul
			in:fly={{ y: 10 }}
			out:fly={{ y: 10 }}
			class="absolute z-50 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li><a href="/">Homepage</a></li>
			<li><a href="/">Portfolio</a></li>
			<li><a href="/">About</a></li>
		</ul>
	{/if}
</div>
