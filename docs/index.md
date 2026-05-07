---
layout: home

hero:
  name: AI Prompting for Everyone
  text: 中文学习笔记
  tagline: DeepLearning.AI 课程整理 · Datawhale 开源
  image:
    src: /logo.png
    alt: AI Prompting for Everyone
  actions:
    - theme: brand
      text: 开始学习
      link: '/module_1/1.1AI新手与AI高级用户 [ The Al novice and the Al power user ]'
    - theme: alt
      text: 课程官网
      link: https://www.deeplearning.ai/courses/ai-prompting-for-everyone/

features:
  - title: 面向初学者
    details: 如何把任务说清楚、补充上下文、控制输出格式，而不是堆砌模型原理。
  - title: 中文整理
    details: 在保留原课程思路的前提下，用更符合中文习惯的表达呈现示例与说明。
  - title: 开源共建
    details: 教程与源文件托管在 GitHub，欢迎 Star、Fork 与 PR。
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Fyuan0206.png',
    name: '此番言',
    title: '项目负责人',
    links: [{ icon: 'github', link: 'https://github.com/Fyuan0206' }],
  },
  {
    avatar: 'https://github.com/Zhiyuan-Academy.png',
    name: '李智江',
    title: '核心贡献者',
    links: [{ icon: 'github', link: 'https://github.com/Zhiyuan-Academy' }],
  },
  {
    avatar: 'https://github.com/FakeNirvana.png',
    name: '柴承清',
    title: '核心贡献者',
    links: [{ icon: 'github', link: 'https://github.com/FakeNirvana' }],
  },
]
</script>

<h2 align="center">贡献者</h2>
<VPTeamMembers size="small" :members />
