<template>
	<div id="MessageRow">
		<div
			class="border border-b-2 border-white hover:border-gray-200 hover:border-t hover:border-y-2 hover:border-x cursor-pointer"
		>
			<div class="flex items-center pl-[14.5px] pr-4 py-2">
				<div class="flex items-center">
					<component :is="CheckboxBlankOutlineIcon" :size="16" fillColor="#ccc" />
					<StarOutlineIcon class="ml-[15px]" :size="18" fillColor="#ccc" />
					<LabelVariantOutlineIcon class="ml-[12px]" :size="18" fillColor="#ccc" />
				</div>
				<div class="flex items-center w-full">
					<router-link to="message" class="w-full">
						<div class="flex items-center justify-between">
							<div class="flex items-center w-full">
								<div class="text-[12.5px] ml-[11px] font-semibold truncate-from">
									{{ from }}
								</div>
								<div class="flex items-center justify-between">
									<div class="mr-1.5 text-[12.5px] font-semibold truncate-subject-body">
										{{ subject }} -
										<span class="font-normal" style="color: #5f6368">{{ body }}</span>
									</div>
								</div>
							</div>

							<div class="text-right truncate mr-4 w-full text-[12.5px]">{{ time }}</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue';
	import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue';
	import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';
	import LabelVariantOutlineIcon from 'vue-material-design-icons/LabelVariantOutline.vue';

	// eslint-disable-next-line no-undef
	const props = defineProps({
		from: String,
		subject: String,
		body: String,
		time: String,
	});

	const { from, subject, body, time } = toRefs(props);
</script>

<style lang="scss">
	#MessageRow {
		.truncate-from {
			width: 200px;
			padding-right: 34px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		.truncate-subject-body {
			width: 550px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
</style>
