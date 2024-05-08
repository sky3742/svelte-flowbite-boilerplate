<script>
	import { UserMenu } from '$lib/components/common';
	import { Navbar, Sidebar } from '$lib/components/layout';
	import { Button, DarkMode } from 'flowbite-svelte';
	import { AdjustmentsVerticalSolid, CogSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex bg-gray-50 antialiased dark:bg-gray-900">
	<div class="relative">
		<Sidebar>
			<!-- Buttons align to the bottom -->
			<DarkMode />
			<Button color="alternative" class="border-none p-2">
				<AdjustmentsVerticalSolid aria-hidden="true" class="h-6 w-6" />
			</Button>
			<Button color="alternative" class="border-none p-2">
				<CogSolid aria-hidden="true" class="h-6 w-6" />
			</Button>
		</Sidebar>
	</div>

	<div class="flex max-h-screen w-full flex-col">
		<Navbar>
			<!-- Buttons align to the right -->
			<!-- Notification list -->
			<UserMenu />
		</Navbar>

		<main class="h-auto overflow-auto p-4">
			<slot />
		</main>
	</div>
</div>
