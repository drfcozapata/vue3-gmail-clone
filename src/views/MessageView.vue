<template>
	<div
		id="SingleMessageSection"
		class="w-full bg-white ml-3 rounded-t-xl h-full shadow-sm"
	>
		<div>
			<div class="flex items-center justify-between px-1.5 py-0.5">
				<div class="flex">
					<router-link to="/email">
						<IconComponent
							iconString="back"
							iconColor="#636363"
							:iconSize="16"
							hoverColor="hover:bg-neutral-200"
							text="Back to Inbox"
						/>
					</router-link>

					<IconComponent
						iconString="trash"
						iconColor="#636363"
						:iconSize="16"
						hoverColor="hover:bg-neutral-200"
						text="Delete"
						class="ml-3"
						@click="deleteEmail(email.id)"
					/>
				</div>
				<div class="text-xs text-gray-500 pr-3">1-50 of 153</div>
			</div>
		</div>

		<div class="w-full text-xl ml-20 font-light pt-5">{{ email.subject }}</div>

		<div class="w-full flex">
			<img
				class="rounded-full mt-6 mx-5 w-10 h-10"
				src="https://via.placeholder.com/40"
			/>
			<div class="w-full my-4 -mx-0.5">
				<div class="font-semibold text-sm mt-2.5 mb-4">
					<div class="w-full flex justify-between items-center">
						<div v-if="email.firstName && email.lastName">
							{{ email.firstName }} {{ email.lastName }}
							<span class="font-normal">({{ email.fromEmail }})</span>
						</div>
						<div v-else>
							{{ email.fromEmail }}
						</div>
						<div class="mr-5 text-xs font-normal">{{ email.createdAt }}</div>
					</div>
					<span class="text-xs text-gray-500 font-normal">to me</span>
				</div>
				<div class="pr-5">
					{{ email.body }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import IconComponent from '@/components/IconComponent.vue';
	import { useUserStore } from '@/store/user-store';
	import { onMounted, ref } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import moment from 'moment';

	let email = ref({});

	const userStore = useUserStore();
	const route = useRoute();
	const router = useRouter();

	onMounted(async () => {
		const res = await userStore.getEmailById(route.params.id);

		await userStore.emailHasBeenViewed(res.id);

		email.value = {
			id: res.id,
			firstName: res.firstName,
			lastName: res.lastName,
			fromEmail: res.fromEmail,
			toEmail: res.toEmail,
			subject: res.subject,
			body: res.body,
			hasViewed: res.hasViewed,
			createdAt: moment(res.createdAt).format('MMM D hh:mm a'),
		};
	});

	const deleteEmail = async id => {
		let res = confirm('Are you sure you want to delete this?');
		if (res) {
			await userStore.deleteEmail(id);
			setTimeout(() => {
				router.push('/email');
			}, 200);
		}
	};
</script>

<style lang="scss"></style>
