<template>
	<div id="HomeView" class="w-full bg-white ml-3 rounded-t-xl h-full shadow-sm">
		<div class="">
			<div class="flex items-center justify-between px-4 my-3">
				<div class="flex">
					<IconComponent
						class="-m-2 -ml-2.5"
						iconString="check"
						iconColor="#636363"
						:iconSize="16"
						hoverColor="hover:bg-neutral-200"
						text="Select"
					/>
					<IconComponent
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

		<div>
			<MessageRow
				from="anakarynah76@gmail.com"
				subject="Test row 1"
				body="This is the body text"
				time="24 dec"
			/>
			<MessageRow
				from="Francisco José Zapata Milllán (Web Developer)"
				subject="Lorem ipsum dolor sit amet consectetur adipisicing elit"
				body="Odio obcaecati animi aliquam quasi aspernatur maxime cumque cupiditate, iusto sequi saepe ab mollitia aliquid consectetur earum dolorem dolore nesciunt facilis deserunt doloremque! Odit delectus neque enim."
				time="23 dec"
			/>
		</div>
	</div>
</template>

<script setup>
	import IconComponent from '@/components/IconComponent.vue';
	import MessageRow from '@/components/MessageRow.vue';
</script>

<style scoped></style>
