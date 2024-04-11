<script>
	import Navbar from '$lib/components/layout/navbar/Navbar.svelte';
	import Sidenav from '$lib/components/layout/sidebar/Sidebar.svelte';
</script>

<div class="bg-gray-50 antialiased dark:bg-gray-900">
	<Navbar />

	<Sidenav />

	<main class="h-auto p-4 pt-20 md:ml-64">
		<slot />
	</main>
</div>
