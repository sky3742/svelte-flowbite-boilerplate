type FetchJsonRequest = {
	url: string;
	requestInit?: RequestInit;
	fetchApi?: typeof fetch;
};

export async function FetchJson<T>({
	url,
	requestInit,
	fetchApi = fetch
}: FetchJsonRequest): Promise<T> {
	const response = await fetchApi(url, {
		headers: {
			...requestInit?.headers,
			'Content-Type': 'application/json'
		},
		...requestInit
	});

	return await response.json();
}
