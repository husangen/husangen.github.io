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
      { text: '基础', items: [
        { text: '计算机组成原理', link: '/1-基础/1-计算机组成原理/1-A-概述.html' },
        { text: '操作系统', link: '/1-基础/2-操作系统/1-A-概述.html' },
        { text: '计算机网络', link: '/1-基础/3-计算机网络/1-A-概述.html' },
        { text: '数据结构与算法', link: '/1-基础/4-数据结构与算法/1-A-概述.html' },
        { text: '编译原理', link: '/1-基础/5-编译原理/1-A-概述.html' },
        { text: '计算机图形学', link: '/1-基础/6-计算机图形学/1-A-概述.html' }
        ]
      },
      { text: 'iOS', link: '/2-iOS/1-A-概述.html'},
      { text: 'Flutter', link: '/3-Flutter/1-A-概述.md' },
      { text: '前端', link: '/4-Web/1-A-概述.md' },
      { text: '后端',link: '/5-Java/1-A-概述.html' },
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

