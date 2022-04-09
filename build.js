const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function build() {
	const frameworks = ["svelte", "react", "vue"];
	for (var i = 0; i < frameworks.length; i++) {
		await exec("cp templates/" + frameworks[i] + ".js rollup.config.js");
		const { stdout, stderr } = await exec("npm run build");
		console.log("stdout:", stdout);
		console.error("stderr:", stderr);
	}
}
build();
