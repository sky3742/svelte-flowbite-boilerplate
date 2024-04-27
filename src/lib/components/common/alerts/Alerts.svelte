<script lang="ts">
	import { Alerts } from '$lib/utils';
	import { removeAlert } from '$lib/utils/alert';
	import { Toast } from 'flowbite-svelte';
	import {
		CheckCircleSolid,
		CloseCircleSolid,
		ExclamationCircleSolid,
		InfoCircleSolid
	} from 'flowbite-svelte-icons';
</script>

<div class="absolute bottom-0 right-0 grid max-w-sm items-end gap-4 p-8">
	{#each $Alerts as alert (alert.id)}
		<Toast
			dismissable={!!alert.manualClose}
			color={alert.type}
			on:close={() => removeAlert(alert.id)}
		>
			<svelte:fragment slot="icon">
				{#if alert.type === 'green'}
					<CheckCircleSolid class="h-5 w-5" />
					<span class="sr-only">Check icon</span>
				{/if}

				{#if alert.type === 'red'}
					<CloseCircleSolid class="h-5 w-5" />
					<span class="sr-only">Error icon</span>
				{/if}

				{#if alert.type === 'orange'}
					<ExclamationCircleSolid class="h-5 w-5" />
					<span class="sr-only">Warning icon</span>
				{/if}

				{#if alert.type === 'blue'}
					<InfoCircleSolid class="h-5 w-5" />
					<span class="sr-only">Info icon</span>
				{/if}
			</svelte:fragment>

			{alert.message}
		</Toast>
	{/each}
</div>
