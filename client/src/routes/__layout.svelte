<script lang="ts">
	import '../app.css';
	import SearchIcon from '../components/navbar/SearchIcon.svelte';
	import NotificationIcon from '../components/navbar/NotificationIcon.svelte';
	import MenuIcon from '../components/navbar/MenuIcon.svelte';
	import AvatarMenu from '../components/navbar/AvatarMenu.svelte';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<MenuIcon />
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">Covid Reporter</a>
	</div>
	<div class="navbar-end">
		<SearchIcon />
		<NotificationIcon />
	</div>
	<div class="relative inline-block dropdown-end">
		<AvatarMenu />
	</div>
</div>

<!-- Child pages go inside the slot -->
<slot />

<style lang="postcss">
	.btn {
		/* @apply block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white */
	}
</style>
