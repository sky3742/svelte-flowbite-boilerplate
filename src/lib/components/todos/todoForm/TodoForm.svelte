<script lang="ts">
	import { TodoFetcher } from '$lib/data/fetchers';
	import { Button, Input } from 'flowbite-svelte';
	import { FireSolid } from 'flowbite-svelte-icons';

	async function handleSubmit(event: SubmitEvent) {
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const text = formData.get('text') as string;

		await TodoFetcher.insert(text);
		form.reset();
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<Input name="text" placeholder="What needs to be done?">
		<Button slot="right" color="none" type="submit" size="xs" class="-mr-2">
			<FireSolid />
		</Button>
	</Input>
</form>
