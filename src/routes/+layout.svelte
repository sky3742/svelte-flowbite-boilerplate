<script>
	import { Notifications } from '$lib/components/common';
	import { initFlowbite } from 'flowbite';
	import { onMount } from 'svelte';
	import '../app.pcss';

	onMount(initFlowbite);
</script>

<slot />
<Notifications />
