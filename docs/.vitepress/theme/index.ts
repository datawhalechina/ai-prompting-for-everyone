import DefaultTheme from 'vitepress/theme'
import './custom.css'
import type { Theme } from 'vitepress'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import { h } from 'vue';

const Announcement = () =>
  h(
    'div',
    { class: 'announcement-banner' },
    '欢迎阅读本教程。如发现疏漏或有改进建议，欢迎在 GitHub 提 Issue 或 PR。',
  )

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册全局组件（可选）
        app.component('vImageViewer', vImageViewer);
    },
    setup() {
        const route = useRoute();
        // 启用插件
        imageViewer(route);
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-top': () => h(Announcement)
        })
    }
} satisfies Theme
