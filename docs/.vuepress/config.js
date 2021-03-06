module.exports = {
  title: 'Simple UI',
  description: '一个基于Vue的组件库',
  base: '/gulu/',
  themeConfig: {
    lastUpdated: '上次更新', // string | boolean,
    nav: [
      { text: '主页', link: '/' },
      { text: '开发指南', link: '/guide/installation' },
    ],
    sidebar: [
      {
        title: '开发指南',   // 必要的
        // path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          ['/guide/installation', '安装'],
          ['/guide/started', '快速上手']
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/components/layout', 'layout 布局'],
          ['/components/grid', 'grid 栅格'],
          ['/components/icon', 'icon 图标'],
          ['/components/button', 'button 按钮'],
          ['/components/input', 'input 输入框'],
          ['/components/popover', 'popover 气泡卡片'],
          ['/components/tab', 'tab 标签页'],
          ['/components/toast', 'toast 弹出层'],
          ['/components/collapse', 'collapse 折叠面板'],
          ['/components/menu', 'menu 菜单'],
          ['/components/form', 'form 表单'],
          ['/components/carousel', 'carousel 无缝轮播组件'],
          ['/components/cascader', 'cascader 级联选择器'],
          ['/components/pagination', 'pagination 分页'],
        ]
      }
    ]
  },
}