import { TodoService } from '$lib/data/services/todo.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	const todos = await TodoService.getAll();
	return json(todos);
}

export async function POST({ request }) {
	const { text } = await request.json();
	await TodoService.insert(text);
	return json({ success: true });
}
