import { ALERT_DURATION_SECOND } from '$lib/constants/constant';
import type { ToastProps } from 'flowbite-svelte/Toast.svelte';
import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

export type Alert = {
	id: string;
	message: string;
	type: ToastProps['color'];
	manualClose?: boolean;
};

export const Alerts = writable<Alert[]>([]);

export function addAlert(alert: Omit<Alert, 'id'>) {
	const id = uuid();

	Alerts.update((alerts) => [
		...alerts,
		{
			id,
			...alert
		}
	]);

	if (!alert.manualClose) {
		setTimeout(() => removeAlert(id), ALERT_DURATION_SECOND * 1000);
	}
}

export function removeAlert(id: string) {
	Alerts.update((alerts) => {
		return alerts.filter((a) => a.id !== id);
	});
}
