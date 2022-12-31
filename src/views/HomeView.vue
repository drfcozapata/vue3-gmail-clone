<template>
	<div id="HomeView" class="w-full bg-white ml-3 rounded-t-xl h-full shadow-sm">
		<div>
			<div class="flex items-center justify-between px-4 my-3">
				<div class="flex">
					<IconComponent
						class="-m-2 -ml-2.5"
						:iconString="checkToDelete"
						iconColor="#636363"
						:iconSize="16"
						hoverColor="hover:bg-neutral-200"
						text="Select"
					/>
					<IconComponent
						@click="deleteSelected"
						class="-m-2 ml-4"
						iconString="trash"
						iconColor="#636363"
						:iconSize="16"
						hoverColor="hover:bg-neutral-200"
						text="Delete selected"
					/>
				</div>
				<div class="text-xs text-gray-500">1-50 of 153</div>
			</div>
		</div>

		<div v-for="email in userStore.emails" :key="email.id">
			<MessageRow
				:id="email.id"
				:from="
					email.firstName || email.lastName
						? `${email.firstName} ${email.lastName}`
						: email.fromEmail
				"
				:subject="email.subject"
				:body="email.body"
				:time="email.createdAt"
				:hasViewed="email.hasViewed"
				@selectedId="selectedId"
			/>
		</div>
	</div>
</template>

<script setup>
	import IconComponent from '@/components/IconComponent.vue';
	import MessageRow from '@/components/MessageRow.vue';
	import { useUserStore } from '@/store/user-store';
	import { computed, onMounted, ref } from 'vue';

	const emailsToDelete = ref([]);

	const userStore = useUserStore();
	onMounted(() => {
		userStore.getEmailsByEmailAddress();
	});

	const selectedId = e => {
		if (!emailsToDelete.value.length) {
			emailsToDelete.value.push(e.id);
		} else if (e.bool && !emailsToDelete.value.includes(e.id)) {
			emailsToDelete.value.push(e.id);
		} else if (!e.bool && emailsToDelete.value.includes(e.id)) {
			const index = emailsToDelete.value.indexOf(e.id);
			if (index > -1) {
				emailsToDelete.value.splice(index, 1);
			}
		}
	};

	const deleteSelected = () => {
		if (!emailsToDelete.value.length) return;

		let res = confirm('Are you sure you want to delete the selected emails?');
		if (res) {
			emailsToDelete.value.forEach(async id => {
				await userStore.deleteEmail(id);
			});
			emailsToDelete.value = [];
		}
	};

	const checkToDelete = computed(() => {
		if (emailsToDelete.value.length === 0) {
			return 'checkb';
		} else if (emailsToDelete.value.length < userStore.emails.length) {
			return 'checkm';
		} else {
			return 'check';
		}
	});
</script>

<style scoped></style>
