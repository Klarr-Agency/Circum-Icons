<script>
	export let name;
	export let size = "32px";
	export let color = "#000";
	import { icons } from "./iconList";
	let displayIcon = icons.find((e) => e.name === name);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
	{@html displayIcon.svg}
</svg>
