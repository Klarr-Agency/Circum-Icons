<script lang="ts">
	import { icons, type IconNames } from "$lib/iconList.js";
	export { clasName as class };
	export { idName as id };
	export let name: IconNames;
	export let size = "32px";
	export let color = "currentColor";
	const findIcon = () => {
		const i = icons.find((e) => e.name === name);
		if (i === undefined) {
			throw new Error("unknown icon");
		}
		return i;
	};
	const displayIcon = findIcon();
</script>

<svg
	class="circumicon__{name}"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill={color}
>
	{@html displayIcon.svg ? displayIcon.svg : "error: unknown icon"}
</svg>
