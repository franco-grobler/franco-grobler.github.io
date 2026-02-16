export default defineAppConfig({
  global: {
    picture: {
      dark: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      light:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Profile picture",
    },
    meetingLink: "https://cal.com/",
    email: process.env.CONTACT_EMAIL,
    available: true,
    staticForms: {
      url: "https://api.staticforms.dev/submit",
      key: process.env.STATICFORM_KEY,
      captcha: process.env.RECAPTCHA_SITE_KEY,
    },
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
    input: {
      slots: {
        root: "w-full relative inline-flex items-center",
      },
    },
    textarea: {
      slots: {
        root: "w-full",
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
    credits: `All rights reserved • Franco Grobler • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        "icon": "lucide:github",
        "to": "https://github.com/franco-grobler",
        "target": "_blank",
        "aria-label": "GitHub",
      },
      {
        "icon": "lucide:linkedin",
        "to": "https://www.linkedin.com/in/franco-grobler-4b26a3156/",
        "target": "_blank",
        "aria-label": "LinkedIn",
      },
      {
        "icon": "lucide:mail",
        "target": "_blank",
        "aria-label": "LinkedIn",
        "email": true,
      },
    ],
  },
});
