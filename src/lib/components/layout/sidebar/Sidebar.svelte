<script lang="ts">
	import { LanguageSelector, SearchInput } from '$lib/components/common';
	import { SideMenu } from '$lib/constants/SideMenu';
	import {
		Button,
		DarkMode,
		Sidebar,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { AdjustmentsVerticalSolid, CogSolid } from 'flowbite-svelte-icons';

	export let searchValue = '';
</script>

<Sidebar
	class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-14 transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0"
	id="drawer-navigation"
>
	<SidebarWrapper class="h-full">
		<form action="#" method="GET" class="mb-2 md:hidden">
			<SearchInput bind:value={searchValue} />
		</form>

		{#each SideMenu as menu, i}
			<SidebarGroup border={i !== 0}>
				{#each menu as item}
					<li>
						{#if item.submenu}
							<SidebarDropdownWrapper label={item.label}>
								<svelte:component
									this={item.icon}
									slot="icon"
									aria-hidden="true"
									class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								/>

								{#each item.submenu as submenu}
									<SidebarDropdownItem label={submenu.label} href={submenu.href} />
								{/each}
							</SidebarDropdownWrapper>
						{:else}
							<SidebarItem href={item.href} label={item.label}>
								<svelte:component
									this={item.icon}
									slot="icon"
									aria-hidden="true"
									class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								/>
							</SidebarItem>
						{/if}
					</li>
				{/each}
			</SidebarGroup>
		{/each}

		<div
			class="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex"
		>
			<DarkMode />

			<Button href="/#" color="alternative" class="border-none p-2">
				<AdjustmentsVerticalSolid aria-hidden="true" class="h-6 w-6" />
			</Button>

			<Button href="/#" color="alternative" class="border-none p-2">
				<CogSolid aria-hidden="true" class="h-6 w-6" />
			</Button>

			<LanguageSelector />
		</div>
	</SidebarWrapper>
</Sidebar>
