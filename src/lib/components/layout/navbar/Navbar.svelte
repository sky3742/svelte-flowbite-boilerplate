<script lang="ts">
	import {
		AppsDropdown,
		NotificationDropdown,
		SearchInput,
		UserMenu
	} from '$lib/components/common';
	import { NavBrand, NavHamburger, Navbar } from 'flowbite-svelte';

	let searchValue = '';
</script>

<Navbar
	let:toggle
	let:NavContainer
	class="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800"
>
	<NavContainer class="flex flex-wrap items-center justify-between">
		<div class="flex items-center justify-start">
			<NavHamburger onClick={toggle} />

			<NavBrand href="https://flowbite.com">
				<img
					src="https://flowbite.s3.amazonaws.com/logo.svg"
					class="mr-3 h-8"
					alt="Flowbite Logo"
				/>
				<span
					class="hidden self-center whitespace-nowrap text-2xl font-semibold dark:text-white md:inline"
				>
					Flowbite
				</span>
			</NavBrand>

			<form action="#" method="GET" class="hidden md:block md:w-64 md:pl-2 lg:w-96">
				<SearchInput bind:value={searchValue} />
			</form>
		</div>

		<div class="flex items-center lg:order-2">
			<NotificationDropdown />
			<AppsDropdown />
			<UserMenu />
		</div>
	</NavContainer>
</Navbar>
