<template>
	<div id="UserComponent" class="w-10">
		<img
			data-tooltip-target="tooltip-no-arrow-user"
			data-tooltip-placement="bottom"
			src="https://via.placeholder.com/40"
			class="rounded-full w-10 cursor-pointer"
		/>
		<div
			id="tooltip-no-arrow-user"
			role="tooltip"
			class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150 bg-gray-800"
		>
			<div>Google Account</div>
			<div class="text-gray-300">Francisco Zapata</div>
			<div class="text-gray-300">drfcozapata@gmail.com</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
