import { invalidate } from '$app/navigation';
import { FetchJson } from '$lib/utils';
import { type Todo } from '../types';

export class TodoFetcher {
	static async getAll(fetchApi = fetch, depends?: (dep: string) => void) {
		depends?.('app:todos');

		const data = await FetchJson<Todo[]>({
			url: '/api/todos',
			fetchApi
		});

		return data.map((todo: Todo) => ({
			...todo,
			createdAt: new Date(todo.createdAt),
			updatedAt: new Date(todo.updatedAt)
		}));
	}

	static async insert(text: string, fetchApi = fetch) {
		await FetchJson({
			url: '/api/todos',
			requestInit: {
				method: 'POST',
				body: JSON.stringify({ text })
			},
			fetchApi
		});
		await invalidate('app:todos');
	}

	static async update(todo: Todo, fetchApi = fetch) {
		await FetchJson({
			url: `/api/todos/${todo.id}`,
			requestInit: {
				method: 'PATCH',
				body: JSON.stringify(todo)
			},
			fetchApi
		});
		await invalidate('app:todos');
	}

	static async delete(todo: Todo, fetchApi = fetch) {
		await FetchJson({
			url: `/api/todos/${todo.id}`,
			requestInit: {
				method: 'DELETE'
			},
			fetchApi
		});
		await invalidate('app:todos');
	}
}
