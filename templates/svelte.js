import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
	input: "src/svelte.js",
	output: [
		{ file: "svelte/index.mjs", format: "es" },
		{ file: "svelte/index.js", format: "umd", name },
	],
	plugins: [svelte(), resolve()],
};
