import { defineConfig } from "eslint/config";
import preactConfig from "eslint-config-preact";

export default defineConfig([
	...preactConfig,
	{
		ignores: ["dist/*"],
	},
]);
