import { TodoService } from '$lib/data/services/todo.js';
import { json } from '@sveltejs/kit';

export async function PATCH({ request, params }) {
	const todo = await request.json();
	await TodoService.update({
		...todo,
		id: params.id
	});

	return json({ success: true });
}

export async function DELETE({ params }) {
	await TodoService.delete(params.id);
	return json({ success: true });
}
