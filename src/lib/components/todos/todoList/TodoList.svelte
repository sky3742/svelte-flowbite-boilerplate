<script lang="ts">
	import { type Todo } from '$lib/data/types';
	import { TodoForm, TodoItem } from '..';

	export let todos: Todo[];
</script>

<TodoForm />

<div class="grid gap-2">
	{#each todos as todo (todo.id)}
		<TodoItem {todo} />
	{/each}
</div>
