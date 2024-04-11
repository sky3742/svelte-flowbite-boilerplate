import {
	ChartPieSolid,
	ClipboardSolid,
	FileLinesSolid,
	InboxSolid,
	LayersSolid,
	LockSolid,
	QuestionCircleSolid,
	ShoppingBagSolid
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
	},
	{
		label: 'Pages',
		icon: FileLinesSolid,
		submenu: [
			{
				label: 'Settings',
				href: '/#'
			},
			{
				label: 'Kanban',
				href: '/#'
			},
			{
				label: 'Calendar',
				href: '/#'
			}
		]
	},
	{
		label: 'Sales',
		icon: ShoppingBagSolid,
		submenu: [
			{
				label: 'Products',
				href: '/#'
			},
			{
				label: 'Billing',
				href: '/#'
			},
			{
				label: 'Invoice',
				href: '/#'
			}
		]
	},
	{
		label: 'Messages',
		icon: InboxSolid,
		href: '/#'
	},
	{
		label: 'Authentication',
		icon: LockSolid,
		submenu: [
			{
				label: 'Sign In',
				href: '/#'
			},
			{
				label: 'Sign Up',
				href: '/#'
			},
			{
				label: 'Forgot Password',
				href: '/#'
			}
		]
	}
];

const secondSection: MenuItem[] = [
	{
		label: 'Docs',
		icon: ClipboardSolid,
		href: '/#'
	},
	{
		label: 'Components',
		icon: LayersSolid,
		href: '/#'
	},
	{
		label: 'Help',
		icon: QuestionCircleSolid,
		href: '/#'
	}
];

export const SideMenu: MenuItem[][] = [firstSection, secondSection];
