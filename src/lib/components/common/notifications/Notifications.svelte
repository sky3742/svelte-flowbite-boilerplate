<script lang="ts">
	import { Notifications } from '$lib/utils';
	import { removeNotification } from '$lib/utils/notification';
	import { Toast } from 'flowbite-svelte';
	import {
		CheckCircleSolid,
		CloseCircleSolid,
		ExclamationCircleSolid,
		InfoCircleSolid
	} from 'flowbite-svelte-icons';
</script>

<div class="absolute bottom-0 right-0 grid max-w-sm items-end gap-4 p-8">
	{#each $Notifications as notification (notification.id)}
		<Toast
			dismissable={!!notification.manualClose}
			color={notification.type}
			on:close={() => removeNotification(notification.id)}
		>
			<svelte:fragment slot="icon">
				{#if notification.type === 'green'}
					<CheckCircleSolid class="h-5 w-5" />
					<span class="sr-only">Check icon</span>
				{/if}

				{#if notification.type === 'red'}
					<CloseCircleSolid class="h-5 w-5" />
					<span class="sr-only">Error icon</span>
				{/if}

				{#if notification.type === 'orange'}
					<ExclamationCircleSolid class="h-5 w-5" />
					<span class="sr-only">Warning icon</span>
				{/if}

				{#if notification.type === 'blue'}
					<InfoCircleSolid class="h-5 w-5" />
					<span class="sr-only">Info icon</span>
				{/if}
			</svelte:fragment>

			{notification.message}
		</Toast>
	{/each}
</div>
