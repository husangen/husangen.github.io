import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevin的主页",
  description: "A VitePress Site",
  head: [
    ['link', { rel: "icon", type: "image/svg", sizes: "32x32", href: "/assets/my-logo.svg"}],
  ],    
  themeConfig: {
    logo: '/assets/my-logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'iOS', link: '/iOS/' },
      { text: 'Flutter', link: '/Flutter/' },
      { text: 'Web', link: '/Web/' },
      { text: 'BackEnd', items: [
        { text: 'Java', link: '/Java' },
      ] },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/husangen' }
    ],

    // 启用搜索  
    search: {
      provider: 'local'
    }
  },

  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        // 自动从文档内读取标题
        titleFromFile: true,
        ignoreIndexItem: true
      })
    ]
  },

  markdown: {
    lineNumbers: true
  }
})

