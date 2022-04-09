const prompts = require("prompts");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function build(framework) {
	const edit = await exec(
		"cp templates/" + framework + ".js rollup.config.js"
	);
	const { stdout, stderr } = await exec("npm run build");
	console.log("stdout:", stdout);
	console.error("stderr:", stderr);
}

(async () => {
	const frameworks = await prompts({
		type: "select",
		name: "value",
		message: "Choose your framework",
		choices: [
			{ title: "Svelte", value: "svelte" },
			{ title: "React", value: "react" },
			{ title: "Vue", value: "vue", disabled: true },
		],
	});
	await build(frameworks.value);
})();
