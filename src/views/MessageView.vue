<template>
	<div
		id="SingleMessageSection"
		class="w-full bg-white ml-3 rounded-t-xl h-full shadow-sm"
	>
		<div>
			<div class="flex items-center justify-between px-1.5 py-0.5">
				<div class="flex">
					<router-link to="/">
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
					/>
				</div>
				<div class="text-xs text-gray-500 pr-3">1-50 of 153</div>
			</div>
		</div>

		<div class="w-full text-xl ml-20 font-light pt-5">Subject</div>

		<div class="w-full flex">
			<img
				class="rounded-full mt-6 mx-5 w-10 h-10"
				src="https://via.placeholder.com/40"
			/>
			<div class="w-full my-4 -mx-0.5">
				<div class="font-semibold text-sm mt-2.5 mb-4">
					<div class="w-full flex justify-between items-center">
						<div>drfcozapata@gmail.com</div>
						<div class="mr-5 text-xs font-normal">Jun 20 3:15pm</div>
					</div>
					<span class="text-xs text-gray-500 font-normal">to me</span>
				</div>
				<div class="pr-5">
					<p class="mb-3">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cumque harum alias
						laborum inventore porro repudiandae ducimus fuga, nam earum molestiae sunt
						quae sequi voluptates asperiores molestias magni minima. Corrupti.
					</p>
					<p class="mb-3">
						Quos, id ipsa veritatis, cumque iste labore expedita vel recusandae vitae,
						dolores praesentium sed at nam. Quaerat placeat provident, esse totam
						veritatis, ullam officiis aut possimus dicta mollitia assumenda voluptatum.
					</p>
					<p class="mb-3">
						Eum, at. Placeat illo corporis obcaecati non eligendi consequuntur
						necessitatibus quae maxime minima odit velit, ratione distinctio, delectus
						magni iste dolor et. Beatae, at in? Enim minima recusandae perspiciatis
						inventore.
					</p>
					<p class="mb-3">
						Non corporis possimus odio quae ut deleniti nam recusandae, quas reprehenderit
						tempore est hic, inventore iure cupiditate voluptatum debitis soluta
						voluptates maiores officia ullam iste? Vitae distinctio repudiandae voluptate
						laborum.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// import { toRefs } from 'vue';
	import IconComponent from '@/components/IconComponent.vue';
	// import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue';
	// import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';
	// import LabelVariantOutlineIcon from 'vue-material-design-icons/LabelVariantOutline.vue';

	// // eslint-disable-next-line no-undef
	// const props = defineProps({
	// 	from: String,
	// 	subject: String,
	// 	body: String,
	// 	time: String,
	// });

	// const { from, subject, body, time } = toRefs(props);
</script>

<style lang="scss">
	#SingleMessageSection {
		//
	}
</style>
