<script>
	export let name;
	export let size = "32px";
	export let color = "currentColor";
	import { icons } from "./iconList";
	$: displayIcon = icons.find((e) => e.name === name);
</script>

<svg
	class="circumicon__{name}"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill={color}
>
	{@html displayIcon.svg}
</svg>
