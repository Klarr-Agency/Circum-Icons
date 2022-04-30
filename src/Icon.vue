<script>
	import { icons } from "./iconList.js";
	export default {
		props: {
			name: {
				type: String,
				default: null,
			},
			size: {
				type: String,
				default: "32px",
			},
			color: {
				type: String,
				default: "#000",
			},
			displayIcon: {
				type: String,
				default: null,
			},
		},
	};
	displayIcon = icons.find((e) => e.name === name);
</script>

<template>
	<svg
		width="{{size}}"
		height="{{size}}"
		viewBox="0 0 24 24"
		fill="{{color}}"
		v-html="displayIcon.svg"
	></svg>
</template>
