import fs from "node:fs/promises";
import path from "node:path";
import test from "ava";
import { x } from "tinyexec";

const format = async ({ name, stdin }) => await x("dprint", ["fmt", "--stdin", name], { stdin, throwOnError: true });

const fixturesDirectory = path.join(import.meta.dirname, "fixtures");
const fixtures = await Array.fromAsync(fs.glob("*/*", { cwd: fixturesDirectory }));

for (const fixture of fixtures) {
	test(`formats ${fixture}`, async t => {
		const stdin = await fs.readFile(path.join(fixturesDirectory, fixture), "utf8");
		const { stdout, exitCode } = await format({ name: path.basename(fixture), stdin });

		t.snapshot(stdout.trim(), "Formatted output");
		t.is(exitCode, 0, "dprint failed!");
	});
}
