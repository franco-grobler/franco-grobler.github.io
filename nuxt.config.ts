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

	css: ["~/assets/css/main.css"],

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
		prerender: {
			routes: ["/"],
			crawlLinks: true,
		},
	},
});
