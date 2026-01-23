import { promises as fs } from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const outFile = path.join(distDir, "styles.css");

async function walk(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const results = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results.push(...(await walk(fullPath)));
		} else if (entry.isFile() && entry.name.endsWith(".css")) {
			if (path.resolve(fullPath) !== path.resolve(outFile)) {
				results.push(fullPath);
			}
		}
	}

	return results;
}

async function main() {
	try {
		await fs.access(distDir);
	} catch {
		throw new Error(
			`dist directory not found at ${distDir}. Run the build first.`,
		);
	}

	const files = (await walk(distDir)).sort((a, b) =>
		a.localeCompare(b, "en"),
	);

	let output = "";
	for (const file of files) {
		const rel = path.relative(distDir, file).replace(/\\/g, "/");
		const content = await fs.readFile(file, "utf8");
		output += `/* ${rel} */\n${content}\n\n`;
	}

	await fs.writeFile(outFile, output.trimEnd() + "\n", "utf8");
	console.log(`Merged ${files.length} files into ${path.relative(".", outFile)}`);
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exit(1);
});
