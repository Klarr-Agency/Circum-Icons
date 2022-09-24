import vue from "rollup-plugin-vue";

export default {
	input: "src/CircumIcons.vue",
	output: {
		format: "esm",
		file: "dist/CircumIcons.js",
	},
	plugins: [vue()],
};
