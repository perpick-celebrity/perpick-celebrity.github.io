/** @type {import("snowpack").SnowpackUserConfig } */
// const rollupPluginSvelte = require('rollup-plugin-svelte');

module.exports = {
	extends: "@snowpack/app-scripts-svelte",
	alias: {
		"@src": "./src"
	},
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	packageOptions: {
		installTypes: true,
		polyfillNode: true,
		// rollup: {
		// 	plugins: [
		// 		rollupPluginSvelte({
		// 			compilerOptions: {
		// 				dev: process.env.NODE_ENV !== 'production',
		// 			}
		// 		}),
		// 	],
		// },
	},
	devOptions: {
		port: 57829,
	},
	buildOptions: {
		clean: true,
		out: "dist",
	},
	optimize: {
		bundle: true,
		minify: true,
		treeshake: true,
		target: "es2020",
	},
};
