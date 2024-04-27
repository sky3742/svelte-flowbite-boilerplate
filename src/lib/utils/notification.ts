import { NOTIFICATION_DURATION_SECOND } from '$lib/constants/Constant';
import type { ToastProps } from 'flowbite-svelte/Toast.svelte';
import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

export type Notification = {
	id: string;
	message: string;
	type: ToastProps['color'];
	manualClose?: boolean;
};

export const Notifications = writable<Notification[]>([]);

export function addNotification(notification: Omit<Notification, 'id'>) {
	const id = uuid();

	Notifications.update((notifications) => [
		...notifications,
		{
			id,
			...notification
		}
	]);

	if (!notification.manualClose) {
		setTimeout(() => removeNotification(id), NOTIFICATION_DURATION_SECOND * 1000);
	}
}

export function removeNotification(id: string) {
	Notifications.update((notifications) => {
		return notifications.filter((a) => a.id !== id);
	});
}
