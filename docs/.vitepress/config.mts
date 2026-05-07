/// <reference types="node" />
import { defineConfig } from 'vitepress'

const repo = 'datawhalechina/ai-prompting-for-everyone'
const repoUrl = `https://github.com/${repo}`

// EdgeOne 等根路径部署：EDGEONE=1；GitHub Pages 项目站默认带子路径
const isEdgeOne = process.env.EDGEONE === '1'
const base = isEdgeOne ? '/' : '/ai-prompting-for-everyone/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI Prompting for Everyone',
  description:
    'DeepLearning.AI《AI Prompting for Everyone》中文学习笔记 — Datawhale 开源教程',
  base,
  markdown: {
    // 正文以图文为主，无 LaTeX；关闭后可避免构建强依赖 markdown-it-mathjax3
    math: false,
  },
  themeConfig: {
    logo: '/datawhale-logo.png',
    nav: [
      {
        text: '课程官网',
        link: 'https://www.deeplearning.ai/courses/ai-prompting-for-everyone/',
      },
      { text: 'GitHub', link: repoUrl },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    // 侧栏 link 与 docs/module_* 下 Markdown 文件名（不含 .md）一一对应
    sidebar: [
      {
        text: 'Module 1',
        collapsed: false,
        items: [
          {
            text: '1.1 AI 新手与 AI 高级用户',
            link: '/module_1/1.1AI新手与AI高级用户 [ The Al novice and the Al power user ]',
          },
          {
            text: '1.2 预训练知识',
            link: '/module_1/1.2预训练知识 [ Pretraind knowledge ]',
          },
          { text: '1.3 网络搜索', link: '/module_1/1.3网络搜索 [ Web search ]' },
          {
            text: '1.4 网络搜索的来源',
            link: '/module_1/1.4网络搜索的来源 [ Web search sources ]',
          },
          {
            text: '1.5 使用深度研究',
            link: '/module_1/1.5使用深度研究 [ Using deep research ]',
          },
        ],
      },
      {
        text: 'Module 2',
        collapsed: false,
        items: [
          {
            text: '2.1 用 AI 头脑风暴',
            link: '/module_2/2.1用AI头脑风暴[Brainstorming with AI]',
          },
          { text: '2.2 上下文', link: '/module_2/2.2上下文[Context]' },
          {
            text: '2.3 AI 桌面应用',
            link: '/module_2/2.3AI桌面应用[AI desktop apps]',
          },
          {
            text: '2.4 用 AI 推理',
            link: '/module_2/2.4用AI推理[Reasoning with AI]',
          },
          { text: '2.5 迎合性', link: '/module_2/2.5迎合性[Sycophancy]' },
          {
            text: '2.6 用 AI 写作',
            link: '/module_2/2.6用AI写作[Writing with AI]',
          },
          { text: '2.7 AI 评审', link: '/module_2/2.7AI评审[AI critique]' },
        ],
      },
      {
        text: 'Module 3',
        collapsed: false,
        items: [
          {
            text: '3.1 处理多媒体数据',
            link: '/module_3/3.1处理多媒体数据[Working with multimedia data]',
          },
          {
            text: '3.2 图像理解',
            link: '/module_3/3.2图像理解[Image understanding]',
          },
          {
            text: '3.3 图像生成',
            link: '/module_3/3.3图像生成[Image generation]',
          },
          { text: '3.4 构建应用', link: '/module_3/3.4构建应用[Building apps]' },
          {
            text: '3.5 数据分析',
            link: '/module_3/3.5数据分析[Data analysis]',
          },
          { text: '3.7 总结', link: '/module_3/3.7总结[Conclusion]' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: repoUrl }],
    editLink: {
      pattern: `${repoUrl}/edit/main/docs/:path`,
    },
    footer: {
      message:
        '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright:
        '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可',
    },
  },
})
