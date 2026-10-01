# jetaimais6.github.io

我的个人主页 —— 纯 HTML/CSS，零依赖、无构建步骤。

🌐 <https://jetaimais6.github.io/>

## 结构

```
.
├── index.html          主页
├── 404.html            404 页面
├── robots.txt          搜索引擎抓取规则
├── sitemap.xml         站点地图
├── assets/
│   ├── tokens.css      设计令牌（颜色/间距/字体）← 换配色改这里
│   ├── style.css       布局与组件样式
│   ├── theme.js        主题切换
│   ├── favicon.svg     站点图标
│   └── og-image.png    社交分享预览图（1200×630）
├── .gitattributes      换行符规范
├── .nojekyll           跳过 Jekyll 处理（勿删）
└── README.md           本文件
```

## 本地预览

直接双击 `index.html`，或用任意静态服务器：

```bash
python -m http.server 8000
```

## 自定义

### 配色

**只改 `assets/tokens.css`，不要改 `style.css`。**

令牌采用语义化命名（描述「用途」而非「颜色」）：

```css
--surface:        #ffffff;   /* 页面底色 */
--surface-raised: #f6f7f9;   /* 卡片、按钮底色 */
--text:           #1a1d21;   /* 正文 */
--text-muted:     #5c6672;   /* 次要文字 */
--accent:         #2563eb;   /* 主色 */
--accent-text:    #ffffff;   /* 主色之上的文字 */
```

浅色主题在 `:root`，深色主题在 `:root[data-theme="dark"]`
和 `@media (prefers-color-scheme: dark)` 两处——**改配色请两处同步**。

### 主题切换

右上角按钮可在浅色/深色间切换，选择会记在 `localStorage`：
- 用户手动选过 → 始终用他的选择
- 没选过 → 跟随系统设置，并随系统变化

防止主题闪烁的代码**内联在 `<head>` 中，必须在 CSS 之前执行**，不要改成 `defer`。

### 中文排版

字体与字距也是令牌：

```css
--font-serif: "Noto Serif SC", "Songti SC", ..., serif;  /* 用于标题，中文更耐读 */
--track-title:   .02em;   /* 大标题字距 */
--track-label:   .08em;   /* 小标签字距 */
--track-eyebrow: .16em;   /* 眉标字距 */
```

### 内容

直接编辑 `index.html`，搜索 `改成你的`。

### 头像

把图片放到 `assets/avatar.jpg`，然后取消 `index.html` 中 `<img class="avatar">`
那一行的注释。

### 更换社交预览图

`assets/og-image.png` 是分享到微信/Twitter 时的缩略图。要换：
- 直接替换该文件（建议 **1200×630**，PNG 或 JPG）
- 或修改 [`../setup/make-og-image.py`](../setup/make-og-image.py) 后重新生成

## 部署

推送到 `main` 分支即自动部署（GitHub Pages，构建约 1 分钟）：

```bash
git add -A
git commit -m "更新内容"
git push
```

## 特性

- 语义化设计令牌，换肤只改一处
- 浅色/深色主题手动切换，无闪烁
- 中文排版优化（衬线标题、字距、行高）
- SEO：canonical、sitemap、robots、JSON-LD 结构化数据
- 社交分享卡片（Open Graph + Twitter Card）
- 响应式，移动端适配
- 键盘可访问（跳转链接、焦点样式）
- 自定义 404 页
- 尊重 `prefers-reduced-motion`
- 零 JavaScript 框架依赖

## License

内容版权归作者所有；代码部分可自由参考。
