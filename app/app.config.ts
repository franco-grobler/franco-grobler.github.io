export default defineAppConfig({
  global: {
    picture: {
      dark: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      light:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Profile picture",
    },
    meetingLink: "https://cal.com/",
    email: "franco@grobler.fyi",
    available: true,
  },
  ui: {
    container: {
      base: "w-full",
    },
    card: {
      slots: {
        root: "rounded-lg overflow-hidden p-4 border border-white/10",
        header: "p-2 sm:px-3",
        body: "p-2 sm:p-3",
        footer: "p-2 sm:px-3",
      },
      variants: {
        variant: {
          solid: {
            root: "bg-secondary text-secondary-foreground",
          },
        },
      },
      defaultVariants: {
        variant: "solid",
      },
    },
  },
  header: {
    home: {
      label: "Franco Grobler",
      to: "/",
    },
  },
  footer: {
    credits: `Built with Nuxt • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        "icon": "i-simple-icons-linkedin",
        "to": "https://www.linkedin.com/in/franco-grobler-4b26a3156/",
        "target": "_blank",
        "aria-label": "LinkedIn",
      },
      {
        "icon": "i-simple-icons-github",
        "to": "https://github.com/franco-grobler",
        "target": "_blank",
        "aria-label": "Nuxt UI on GitHub",
      },
    ],
  },
});
