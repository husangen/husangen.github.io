import { DefaultTheme, defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

const chineseNumberOrder = ['概述','一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevin",
  description: "A VitePress Site",
  head: [
    ['link', { rel: "icon", type: "image/svg", sizes: "32x32", href: "/assets/my-logo.svg"}],
  ],    
  themeConfig: {
    logo: '/assets/my-logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'iOS', link: '/2-iOS/概述.html'},
      { text: 'Flutter', link: '/3-Flutter/概述.md' },
      { text: '前端', link: '/4-Web/概述.md' },
      { text: '后端',link: '/5-Java/概述.html' },
      { text: '基础', items: [
        { text: '计算机组成原理', link: '/1-基础/一、计算机组成原理/概述.html' },
        { text: '操作系统', link: '/1-基础/二、操作系统/概述.html' },
        { text: '计算机网络', link: '/1-基础/三、计算机网络/概述.html' },
        { text: '数据结构与算法', link: '/1-基础/四、数据结构与算法/概述.html' },
        { text: '编译原理', link: '/1-基础/五、编译原理/概述.html' },
        { text: '计算机图形学', link: '/1-基础/六、计算机图形学/概述.html' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/husangen' }
    ],

    // 启用搜索  
    search: {
      provider: 'local'
    },

    outline: {
      level: [4, 5],
      label: '目录'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },

  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        // 自动从文档内读取标题
        titleFromFile: true,
        ignoreIndexItem: true,
        collapsed: true,
        beforeCreateSideBarItems: (items) => {
          // 过滤出以中文数字开头的项目
          let chineseNumberItems = items.filter(item => {
              const text = item;
              return chineseNumberOrder.some(num => text.startsWith(num));
          });
          //没找到，直接返回
          if (chineseNumberItems.length <= 0) {
            //对1、2.1 这种数字排序
            return items.sort((a, b) => {
              const numStr1 = a.match(/^\d+(?:\.\d+)?/)?.[0];
              const numStr2 = b.match(/^\d+(?:\.\d+)?/)?.[0];   
              if (numStr1 && numStr2) {
                const num1 = parseFloat(numStr1);
                const num2 = parseFloat(numStr2);
                return num1 - num2;
              }       
              return parseFloat(a) - parseFloat(b);
           });
          }

          // 过滤出不以中文数字开头的项目
          let otherItems = items.filter(item => {
              const text = item;
              return!chineseNumberOrder.some(num => text.startsWith(num));
          });

          // 对以中文数字开头的项目进行排序
          chineseNumberItems.sort((a, b) => {
              const indexA = chineseNumberOrder.indexOf(a[0]);
              const indexB = chineseNumberOrder.indexOf(b[0]);
              return indexA - indexB;
          });

          // 将排序后的中文数字项目和其他项目重新组合
          return [...chineseNumberItems,...otherItems];
        }
      })
    ]
  },

  markdown: {
    lineNumbers: true
  }
})

