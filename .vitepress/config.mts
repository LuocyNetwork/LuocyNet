import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LuocyNet",
  description: "A small network",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/start' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Start', link: '/start' },
          { text: 'Join', link: '/join' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LuocyNetwork' }
    ]
  }
})
