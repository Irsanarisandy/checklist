/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions}
 */
export default {
	printWidth: 100,
	useTabs: true,
	singleQuote: false,
	trailingComma: "es5",

	plugins: ["prettier-plugin-tailwindcss"],
	tailwindAttributes: ["className"],
};
