import vue from "rollup-plugin-vue";
import copy from "rollup-plugin-copy";
export default {
	input: [
		"src/CircumIcons.vue",
	],
	output: {
		format: "esm",
		file: "dist/CircumIcons.js",
	},
	plugins: [vue(), copy({
		targets: [
			{src: "src/*.d.ts", dest: "dist/"}
		]
	})],
};
