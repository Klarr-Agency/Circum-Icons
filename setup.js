const prompts = require("prompts");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function build(framework) {
	await exec("cp -a dist/" + framework + "/. dist/");
	await exec("rm -r dist/**/");
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
