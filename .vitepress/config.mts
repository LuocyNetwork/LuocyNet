import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LuocyNet",
  description: "A small network",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '开始', link: '/docs/' },
          { text: '白皮书', link: '/docs/whitepaper' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LuocyNetwork' }
    ]
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://luocynet.com'
  }
})

