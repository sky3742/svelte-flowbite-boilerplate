import {
	ArrowLeftToBracketOutline,
	ChartPieSolid,
	ClipboardSolid,
	LockSolid
} from 'flowbite-svelte-icons';
import type {
	LayersSolidEvents,
	LayersSolidProps,
	LayersSolidSlots
} from 'flowbite-svelte-icons/LayersSolid.svelte';
import type { SvelteComponent } from 'svelte';

export interface MenuItem {
	label: string;
	icon?: typeof SvelteComponent<LayersSolidProps, LayersSolidEvents, LayersSolidSlots>;
	href?: string;
	submenu?: MenuItem[];
}

const firstSection: MenuItem[] = [
	{
		label: 'Overview',
		icon: ChartPieSolid,
		href: '/#'
	}
];

const secondSection: MenuItem[] = [
	{
		label: 'Login',
		icon: ArrowLeftToBracketOutline,
		href: '/login'
	},
	{
		label: 'Register',
		icon: ClipboardSolid,
		href: '/register'
	},
	{
		label: 'Forgot Password',
		icon: LockSolid,
		href: '/forgot-password'
	}
];

export const SideMenu: MenuItem[][] = [firstSection, secondSection];
