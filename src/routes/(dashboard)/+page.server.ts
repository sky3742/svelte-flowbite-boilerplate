import { TodoFetcher } from '$lib/data/fetchers';

export async function load({ fetch, depends }) {
	return {
		todos: await TodoFetcher.getAll(fetch, depends)
	};
}
