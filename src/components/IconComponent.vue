<template>
	<div id="IconComponent">
		<div
			class="flex items-center justify-center rounded-full cursor-pointer w-9 h-9"
			:class="[hoverColor]"
			:data-tooltip-target="`tooltip-no-arrow-${iconString}`"
			data-tooltip-placement="bottom"
		>
			<component :is="icon" :size="iconSize" :fillColor="iconColor" />
		</div>

		<div
			:id="`tooltip-no-arrow-${iconString}`"
			role="tooltip"
			class="tooltip inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-gray-100 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150 bg-gray-700"
		>
			{{ text }}
		</div>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue';
	import MenuIcon from 'vue-material-design-icons/Menu.vue';
	import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
	import TuneIcon from 'vue-material-design-icons/Tune.vue';
	import HelpIcon from 'vue-material-design-icons/Help.vue';
	import CogOutlineIcon from 'vue-material-design-icons/CogOutline.vue';
	import AppsIcon from 'vue-material-design-icons/Apps.vue';
	import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
	import TrashCanOutlineIcon from 'vue-material-design-icons/TrashCanOutline.vue';
	import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue';
	import CheckboxOutlineIcon from 'vue-material-design-icons/CheckboxOutline.vue';
	import MinusBoxOutlineIcon from 'vue-material-design-icons/MinusBoxOutline.vue';

	// eslint-disable-next-line no-undef
	const props = defineProps({
		iconString: String,
		iconColor: String,
		iconSize: Number,
		text: String,
		hoverColor: String,
	});

	const { iconString, iconColor, iconSize, text, hoverColor } = toRefs(props);

	let icon = null;

	if (iconString.value === 'menu') icon = MenuIcon;
	if (iconString.value === 'magnify') icon = MagnifyIcon;
	if (iconString.value === 'tune') icon = TuneIcon;
	if (iconString.value === 'help') icon = HelpIcon;
	if (iconString.value === 'cog') icon = CogOutlineIcon;
	if (iconString.value === 'apps') icon = AppsIcon;
	if (iconString.value === 'back') icon = ArrowLeftIcon;
	if (iconString.value === 'trash') icon = TrashCanOutlineIcon;
	if (iconString.value === 'checkb') icon = CheckboxBlankOutlineIcon;
	if (iconString.value === 'check') icon = CheckboxOutlineIcon;
	if (iconString.value === 'checkm') icon = MinusBoxOutlineIcon;
</script>

<style scoped></style>
