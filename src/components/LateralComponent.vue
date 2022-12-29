import { toRefs } from 'vue';
<template>
	<div id="LateralComponent">
		<div
			class="w-10 h-10 flex justify-center items-center mb-3 hover:bg-neutral-200 rounded-full hover:cursor-pointer"
			:data-tooltip-target="`tooltip-no-arrow-${imageString}`"
			data-tooltip-placement="bottom"
		>
			<img class="object-center w-[18px] h-[18px]" :src="`img/${imageComplement}.png`" />
		</div>

		<div
			:id="`tooltip-no-arrow-${imageString}`"
			role="tooltip"
			class="tooltip inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-gray-100 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150 bg-gray-700"
		>
			{{ text }}
		</div>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue';

	// eslint-disable-next-line no-undef
	const props = defineProps({
		imageComplement: String,
		imageString: String,
		text: String,
	});

	const { imageComplement, imageString, text } = toRefs(props);
</script>

<style>
	.tooltip {
		font-size: 11px;
	}
</style>
