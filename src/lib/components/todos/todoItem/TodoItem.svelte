<script lang="ts">
	import { TodoFetcher } from '$lib/data/fetchers';
	import { type Todo } from '$lib/data/types';
	import { addNotification } from '$lib/utils/notification';
	import { Button, Checkbox, Label, Span } from 'flowbite-svelte';
	import { TrashBinSolid } from 'flowbite-svelte-icons';

	export let todo: Todo;

	async function handleUpdate() {
		await TodoFetcher.update({
			...todo,
			completed: !todo.completed
		});
		addNotification({
			type: 'green',
			message: 'Todo updated'
		});
	}

	async function handleDelete() {
		await TodoFetcher.delete(todo);
		addNotification({
			type: 'green',
			message: 'Todo deleted'
		});
	}
</script>

<div class="flex items-center justify-between">
	<Label class="flex grow">
		<Checkbox checked={todo.completed} on:click={handleUpdate} />
		{#if todo.completed}
			<Span linethrough>{todo.text}</Span>
		{:else}
			<Span>{todo.text}</Span>
		{/if}
	</Label>

	<Button size="xs" color="none" on:click={handleDelete}>
		<TrashBinSolid color="red" />
	</Button>
</div>
