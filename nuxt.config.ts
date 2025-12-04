export default {
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  app: {
    head: {
      title: "chle",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "color-scheme", content: "light only" },
        { name: "description", content: "~" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?display=swap&family=IBM+Plex+Mono:ital,wght@0,400;1,400&family=Inter:ital,wght@0,400;1,400",
        },
        {
          rel: "stylesheet",
          href: "https://www.nerdfonts.com/assets/css/webfont.css",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
}
