<script lang="ts">
	import { APP_LOGO, APP_NAME } from '$lib/constants/constant';
	import { Button, Checkbox, Input, Label } from 'flowbite-svelte';
	import { Register, Section } from 'flowbite-svelte-blocks';
</script>

<Section name="login">
	<Register href="/login">
		<svelte:fragment slot="top">
			<img class="mr-2 h-8 w-8" src={APP_LOGO} alt="{APP_NAME} Logo" />
			{APP_NAME}
		</svelte:fragment>

		<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
			<form class="flex flex-col space-y-6" action="/">
				<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">
					Sign in to your account
				</h3>
				<Label class="space-y-2">
					<span>Your email</span>
					<Input type="email" name="email" placeholder="name@company.com" required />
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>
				<div class="flex items-start">
					<Checkbox>Remember me</Checkbox>
					<a
						href="/forgot-password"
						class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
					>
						Forgot password?
					</a>
				</div>
				<Button type="submit" class="w-full">Sign in</Button>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Don’t have an account yet?
					<a
						href="/register"
						class="font-medium text-primary-600 hover:underline dark:text-primary-500"
					>
						Sign up
					</a>
				</p>
			</form>
		</div>
	</Register>
</Section>
