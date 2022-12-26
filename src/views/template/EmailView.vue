<template>
	<div id="EmailView" class="bg-gray-50 h-screen">
		<div class="flex items-center p-2">
			<div class="logo-section flex justify-start items-center px-3.5">
				<IconComponent
					icon-string="menu"
					icon-color="#636363"
					:icon-size="19"
					hover-color="hover:bg-gray-200"
					text="Main menu"
					class="-ml-2 mr-2"
				/>
				<img width="107" src="/img/GmailLogo.png" alt="Gmail logo" />
			</div>

			<div class="flex w-full justify-between">
				<div class="w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg">
					<IconComponent
						icon-string="magnify"
						icon-color="#636363"
						:icon-size="19"
						hover-color="hover:bg-gray-200"
						text="Search"
					/>
					<input
						class="w-full h-10 bg-gray-200 border-transparent border-none focus:ring-0 outline-none placeholder-gray-900"
						type="text"
						placeholder="Search email"
					/>
					<IconComponent
						icon-string="tune"
						icon-color="#636363"
						:icon-size="19"
						hover-color="hover:bg-gray-200"
						text="Show search options"
					/>
				</div>
				<div class="flex w-44 justify-between items-center ml-6 mr-2">
					<IconComponent
						icon-string="cog"
						icon-color="#636363"
						:icon-size="19"
						hover-color="hover:bg-gray-200"
						text="Settings"
					/>
					<IconComponent
						icon-string="apps"
						icon-color="#636363"
						:icon-size="19"
						hover-color="hover:bg-gray-200"
						text="Google Apps"
					/>

					<UserComponent />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import IconComponent from '@/components/IconComponent.vue';
	import UserComponent from '@/components/UserComponent.vue';
</script>

<style lang="scss" scoped>
	#EmailView {
		.logo-section {
			min-width: 250px;
		}
	}
	@media (max-width: 768px) {
		#EmailView {
			.logo-section {
				min-width: 200px;
			}
		}
	}
</style>
