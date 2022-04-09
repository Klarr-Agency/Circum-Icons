import vue from "rollup-plugin-vue";
import pkg from "./package.json";

const name = pkg.name
	.replace(/^(@\S+\/)?(vue-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
	input: "src/Icon.vue",
	output: [
		{ file: "dist/vue/index.mjs", format: "esm" },
		{ file: "dist/vue/index.js", format: "umd", name },
	],
	plugins: [vue()],
};
