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

  icon: {
    clientBundle: {
      icons: [
        "lucide:arrow-right",
        "lucide:book-open-text",
        "lucide:clock",
        "lucide:cloud",
        "lucide:code-xml",
        "lucide:external-link",
        "lucide:folder-kanban",
        "lucide:git-branch",
        "lucide:hash",
        "lucide:letter-text",
        "lucide:library",
        "lucide:microscope",
        "lucide:moon",
        "lucide:monitor",
        "lucide:send",
        "lucide:server",
        "lucide:sun",
        "material-symbols:arrow-right-alt",
        "simple-icons:github",
      ],
    },
  },

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
    preset: import.meta.env.NITRO_PRESET ?? "github_pages",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  runtimeConfig: {
    public: {
      recaptcha: {
        v3SiteKey: "YOUR_V3_SITEKEY_HERE",
      },
    },
  },

  typescript: {
    tsConfig: {
      include: ["test/unit/**/*"],
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
