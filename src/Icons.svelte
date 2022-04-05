<script lang="ts">
	export let iconName: string;
	export let size: string = "32px";
	export let color: string = "#fff";
	let icons: any = [
		{
			box: 24,
			iconName: "home",
			svg: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>`,
		},
	];
	let displayIcon = icons.find((e) => e.iconName === iconName);
</script>

<svg
	class={$$props.class}
	width={size}
	height={size}
	viewBox="0 0 {displayIcon.box} {displayIcon.box}"
	fill={color}
>
	{@html displayIcon.svg}
</svg>
