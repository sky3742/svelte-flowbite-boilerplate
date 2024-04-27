<script lang="ts">
	import { TodoList } from '$lib/components/todos';
	import { Heading } from 'flowbite-svelte';

	export let data;
</script>

<div class="m-auto grid max-w-sm gap-6">
	<Heading tag="h2" class="text-center">Todos</Heading>

	<TodoList todos={data.todos} />
</div>
