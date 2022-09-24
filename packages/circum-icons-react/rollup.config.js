import jsx from "rollup-plugin-jsx";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const name = pkg.name
	.replace(/^(@\S+\/)?(jsx-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
	input: "src/index.js",
	output: [
		{ file: "dist/index.mjs", format: "esm" },
		{ file: "dist/index.js", format: "cjs", name },
	],
	plugins: [resolve(), commonjs(), jsx({ factory: "React.createElement" })],
};
