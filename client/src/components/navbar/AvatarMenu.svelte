<script lang="ts">
	import { fly } from 'svelte/transition';

	const avatarMenuOptions: { slot: string; href: string; class: string; newBadge: boolean }[] = [
		{ slot: 'Profile', href: '/', class: 'justify-between', newBadge: true },
		{ slot: 'Settings', href: '/', class: '', newBadge: false },
		{ slot: 'Logout', href: '/', class: '', newBadge: false }
	];

	let showAvatarMenu: Boolean | null = null;

	const handleOnClick = () => showAvatarMenu = showAvatarMenu ? false : true;
	const handleOnBlur = () => showAvatarMenu = showAvatarMenu ? false : null;
</script>

<label on:click={handleOnClick} on:blur={handleOnBlur} for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
	<div class="w-10 rounded-full">
		<img src="https://placeimg.com/80/80/people" alt="user avatar" />
	</div>
</label>
{#if showAvatarMenu}
	<ul in:fly={{y:10}} out:fly={{y:10}}
		class= "position absolute z-50 mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
	>
		{#each avatarMenuOptions as option}
			<li>
				<a href={option.href} class={option.class}
					>{option.slot}
					{#if option.newBadge}
						<span class="badge">New</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
{/if}