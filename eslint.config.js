import { defineConfig } from "eslint/config";
import preactConfig from "eslint-config-preact";
import prettierConfig from "eslint-config-prettier/flat";

export default defineConfig([
	...preactConfig,
	{
		ignores: ["dist/*"],
	},
	prettierConfig,
]);
