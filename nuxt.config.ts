// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",

	content: {
		build: {
			markdown: {
				toc: {
					depth: 3,
				},
			},
		},
	},

	css: ["~/assets/css/index.css"],

	devtools: { enabled: true },

	imports: {
		autoImport: true,
	},

	modules: [
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxt/hints",
		"@nuxt/image",
		"@nuxt/test-utils",
		"@nuxt/ui",
	],

	nitro: {
		preset: "bun",
		prerender: {
			routes: ["/"],
			crawlLinks: true,
		},
	},

	ui: {
		theme: {
			colors: [
				"primary",
				"secondary",
				"tertiary",
				"info",
				"success",
				"warning",
				"error",
				"accent",
			],
		},
	},
});
