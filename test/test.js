import { promises as fs } from "node:fs";
import test from "ava";
import { $ } from "execa";

const fixtureFiles = await fs.readdir(new URL("fixtures", import.meta.url));
const fixtures = fixtureFiles.filter(file => file.startsWith("fixture."));

for (const fixture of fixtures) {
	const extension = "." + fixture.split(".")[1];

	test(`formats ${extension}`, async t => {
		const inputFile = new URL(`fixtures/${fixture}`, import.meta.url);
		const { stdout, exitCode } = await $({ inputFile })`dprint fmt --stdin ${fixture}`;

		t.snapshot(stdout);
		t.is(exitCode, 0);
	});
}
