import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lariscy.github.io",
  description: "Just some stuff and things I don't want to loose",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Recipes", link: "/recipes" }],

    sidebar: [
      {
        text: "Recipes",
        base: "/recipes",
        items: [{ text: "Biscuits", link: "/biscuits" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lariscy/lariscy.github.io" },
    ],

    lastUpdated: true,
  },
});
