<script lang="ts">
	import { Input } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';

	export let value = '';
</script>

<label for="topbar-search" class="sr-only">Search</label>
<div class="relative">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<SearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />
	</div>

	<Input
		id="topbar-search"
		name="search"
		bind:value
		placeholder="Search"
		class="rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
	/>
</div>
