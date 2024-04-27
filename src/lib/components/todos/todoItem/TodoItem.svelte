<script lang="ts">
	import { TodoFetcher } from '$lib/data/fetchers';
	import { type Todo } from '$lib/data/types';
	import { Button, Checkbox, Label, Span } from 'flowbite-svelte';
	import { TrashBinSolid } from 'flowbite-svelte-icons';

	export let todo: Todo;
</script>

<div class="flex items-center justify-between">
	<Label class="flex grow">
		<Checkbox
			checked={todo.completed}
			on:click={() => {
				TodoFetcher.update({
					...todo,
					completed: !todo.completed
				});
			}}
		/>
		{#if todo.completed}
			<Span linethrough>{todo.text}</Span>
		{:else}
			<Span>{todo.text}</Span>
		{/if}
	</Label>
	<Button size="xs" color="none" on:click={() => TodoFetcher.delete(todo)}>
		<TrashBinSolid color="red" />
	</Button>
</div>
