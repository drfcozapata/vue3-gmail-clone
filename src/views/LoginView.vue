<template>
	<div id="LoginView" class="grid h-screen place-items-center">
		<div>
			<img width="280" src="img/GmailLogin.png" />
			<div class="flex justify-center">
				<GoogleLogin :callback="callback" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useUserStore } from '@/store/user-store';
	import { useRouter } from 'vue-router';

	const router = useRouter();
	const userStore = useUserStore();
	const callback = async response => {
		await userStore.getUserDetailsFromGoogle(response);
		setTimeout(() => {
			router.push('/email');
		}, 650);
	};
</script>

<style scoped></style>
