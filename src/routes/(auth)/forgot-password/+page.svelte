<script lang="ts">
	import { Button, Checkbox, Input, Label } from 'flowbite-svelte';
	import { Register, Section } from 'flowbite-svelte-blocks';
</script>

<Section name="forgotpassword">
	<Register href="/forgot-password">
		<svelte:fragment slot="top">
			<img class="mr-2 h-8 w-8" src="https://flowbite.s3.amazonaws.com/logo.svg" alt="logo" />
			Flowbite
		</svelte:fragment>
		<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
			<form class="flex flex-col space-y-6" action="/">
				<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
				<Label class="space-y-2">
					<span>Your email</span>
					<Input type="email" name="email" placeholder="name@company.com" required />
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>
				<Label class="space-y-2">
					<span>Confirm password</span>
					<Input type="password" name="confirm-password" placeholder="•••••" required />
				</Label>
				<div class="flex items-start">
					<Checkbox>
						I accept the
						<a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">
							Terms and Conditions
						</a>
					</Checkbox>
				</div>
				<Button type="submit" class="w-full">Reset passwod</Button>
			</form>
		</div>
	</Register>
</Section>
