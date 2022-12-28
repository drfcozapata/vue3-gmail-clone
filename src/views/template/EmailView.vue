<template>
	<div id="EmailView" class="bg-gray-50 h-screen">
		<div id="TopMenu" class="flex items-center p-2">
			<div class="logo-section flex justify-start items-center px-3.5">
				<IconComponent
					iconString="menu"
					iconColor="#636363"
					:iconSize="22"
					hoverColor="hover:bg-neutral-200"
					text="Main menu"
					class="-ml-2 mr-2"
				/>
				<img width="100" src="/img/GmailLogo.png" alt="Gmail logo" title="Gmail" />
			</div>

			<div class="flex w-full justify-between">
				<div class="input-width w-full flex items-center py-1 px-2 rounded-lg">
					<IconComponent
						iconString="magnify"
						iconColor="#636363"
						:iconSize="22"
						hoverColor="hover:bg-neutral-200"
						text="Search"
					/>
					<input
						class="w-full h-9 text-sm border-transparent border-none focus:ring-0 outline-none placeholder-gray-500"
						type="text"
						placeholder="Search email"
					/>
					<IconComponent
						iconString="tune"
						iconColor="#636363"
						:iconSize="22"
						hoverColor="hover:bg-neutral-200"
						text="Show search options"
					/>
				</div>

				<div class="flex w-32 justify-between items-center ml-6 mr-2">
					<IconComponent
						iconString="cog"
						iconColor="#636363"
						:iconSize="22"
						hoverColor="hover:bg-neutral-200"
						text="Settings"
					/>
					<IconComponent
						iconString="apps"
						iconColor="#636363"
						:iconSize="22"
						hoverColor="hover:bg-neutral-200"
						text="Google Apps"
					/>

					<div class="w-10 p-1 hover:bg-neutral-200 rounded-full">
						<UserComponent />
					</div>
				</div>
			</div>
		</div>

		<div class="flex w-full justify-between">
			<div id="SideMenu" class="side-menu">
				<div
					@click="NewMessageOpen = true"
					class="compose flex items-center justify-center bg-sky-200 mt-2 ml-1.5 rounded-2xl cursor-pointer"
				>
					<PencilOutlineIcon :size="22" class="mr-3" />
					<span class="text-xs">Compose</span>
				</div>

				<div class="my-4"></div>

				<div
					class="side-menu-item flex justify-between pl-6 py-1.5 pr-3 bg-blue-100 text-slate-800 rounded-r-full"
				>
					<div class="flex items-center">
						<InboxIcon :size="17" />
						<div class="text-xs pl-4 font-semibold">Inbox</div>
					</div>

					<div class="side-menu-font font-semibold">26</div>
				</div>

				<div
					class="bg-gray-custom flex justify-between px-6 py-1.5 text-slate-800 rounded-r-full"
				>
					<div class="flex items-center">
						<StarOutlineIcon :size="17" />
						<div class="text-xs pl-4">Starred</div>
					</div>
				</div>

				<div
					class="bg-gray-custom flex justify-between px-6 py-1.5 text-slate-800 rounded-r-full"
				>
					<div class="flex items-center">
						<ClockOutlineIcon :size="17" />
						<div class="text-xs pl-4">Snoozed</div>
					</div>
				</div>

				<div
					class="bg-gray-custom flex justify-between px-6 py-1.5 text-slate-800 rounded-r-full"
				>
					<div class="flex items-center">
						<SendOutlineIcon :size="17" />
						<div class="text-xs pl-4">Sent</div>
					</div>
				</div>

				<div
					class="bg-gray-custom flex justify-between px-6 py-1.5 text-slate-800 rounded-r-full"
				>
					<div class="flex items-center">
						<FileOutlineIcon :size="17" />
						<div class="text-xs pl-4">Drafts</div>
					</div>
				</div>
			</div>

			<RouterView />

			<div class="m-4">
				<LateralComponent
					imageComplement="GoogleCalendar"
					imageString="calendar"
					text="Calendar"
				/>
				<LateralComponent imageComplement="GoogleKeep" imageString="keep" text="Keep" />
				<LateralComponent
					imageComplement="GoogleTasks"
					imageString="tasks"
					text="Tasks"
				/>
				<LateralComponent
					imageComplement="GoogleContacts"
					imageString="contacts"
					text="Contacts"
				/>
				<div class="w-6 flex ml-2 mb-6 border border-gray-300"></div>
				<div id="PlusComponent">
					<div
						class="w-10 h-10 p-2.5 flex justify-center mb-6 hover:bg-neutral-200 rounded-full text-gray-800"
						data-tooltip-target="tooltip-no-arrow-plus"
						data-tooltip-placement="bottom"
					>
						<PlusIcon />
					</div>
					<div
						id="tooltip-no-arrow-plus"
						role="tooltip"
						class="tooltip inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-gray-100 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150 bg-gray-700"
					>
						Get complements
					</div>
				</div>
			</div>
		</div>

		<div
			v-if="NewMessageOpen"
			id="NewMessageSection"
			class="absolute bottom-0 right-0 mr-20 rounded-t-lg shadow-xl bg-white text-xs font-semibold"
		>
			<div
				class="flex items-center justify-between rounded-t-lg w-full text-sm px-3.5 py-2.5 bg-gray-100"
			>
				<div>New Message</div>
				<CloseIcon @click="NewMessageOpen = false" class="cursor-pointer" :size="18" />
			</div>

			<div class="relative flex items-center px-3.5 py-2">
				<div class="text-xs text-gray-600">To</div>
				<input
					class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
					type="text"
				/>
				<div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
			</div>

			<div class="relative flex items-center px-3.5 py-2">
				<div class="text-xs text-gray-600">Subject</div>
				<input
					class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
					type="text"
				/>
				<div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
			</div>

			<div class="m-3">
				<textarea
					style="resize: none"
					class="w-full border-transparent border-none focus:ring-0 outline-none"
					rows="14"
				></textarea>
			</div>

			<div class="p-4 mt-5">
				<button
					class="absolute bottom-3 left-3 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-full"
				>
					Send Message
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import IconComponent from '@/components/IconComponent.vue';
	import UserComponent from '@/components/UserComponent.vue';
	import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue';
	import InboxIcon from 'vue-material-design-icons/Inbox.vue';
	import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';
	import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue';
	import SendOutlineIcon from 'vue-material-design-icons/SendOutline.vue';
	import FileOutlineIcon from 'vue-material-design-icons/FileOutline.vue';
	import PlusIcon from 'vue-material-design-icons/Plus.vue';
	import CloseIcon from 'vue-material-design-icons/Close.vue';
	import LateralComponent from '@/components/LateralComponent.vue';

	const NewMessageOpen = ref(false);
</script>

<style lang="scss">
	#EmailView {
		.logo-section {
			min-width: 220px;
		}
		.input-width {
			width: 660px;
			background-color: #eaf1fb;

			input {
				background-color: #eaf1fb;
			}
		}
		.side-menu {
			width: 202px;

			.compose {
				width: 124px;
				height: 52px;
			}

			.side-menu-item {
				width: 202px;

				.side-menu-font {
					font-size: 11px;
				}
			}

			.bg-gray-custom {
				background-color: #eee;
			}
		}
	}
	@media (max-width: 768px) {
		#EmailView {
			.logo-section {
				min-width: 200px;
			}
		}
	}
	#NewMessageSection {
		width: 526px;
		height: 460px;
	}
</style>
