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
--surface:        #fffdfd;   /* 页面底色（带极淡粉调） */
--surface-raised: #fdf5f7;   /* 卡片、按钮底色 */
--surface-tint:   #fdf0f4;   /* 标签、徽章底色 */
--text:           #241d20;   /* 正文 */
--text-muted:     #6b5a61;   /* 次要文字 */
--accent:         #b83b64;   /* 主色：玫瑰粉 */
--accent-text:    #ffffff;   /* 主色之上的文字 */
```

> 配色取自头像背景色 `#efc1cb` 的同色系。**主色是深玫瑰粉**而不是那个淡粉，
> 因为淡粉上放白字对比度不足（只有约 1.5:1），按钮文字会看不清。
> 当前 `#b83b64` 配白字为 **5.46:1**，符合 WCAG AA。

浅色主题在 `:root`，深色主题在 `:root[data-theme="dark"]`
和 `@media (prefers-color-scheme: dark)` 两处——**改配色请两处同步**。

改完配色后可跑对比度校验：

```bash
node ../setup/check-contrast.js
```

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

直接编辑 `index.html`。所有文字都是真实内容，没有占位符。

### 头像

`assets/avatar.jpg`（480×480）。

原图是 1080×1080、手写标记在**左下角且贴边**，直接当头像会看不清。
所以用 [`../setup/make-avatar.py`](../setup/make-avatar.py) 做了处理：
把标记居中、背景用主色填充，圆形裁切后构图完整。

换头像时：直接替换 `assets/avatar.jpg` 即可。若是类似构图（主体偏角落），
可改脚本里的 `BOX` 坐标重新生成。

### 更换社交预览图

`assets/og-image.png` 是分享到微信/Twitter 时的缩略图。要换：
- 直接替换该文件（建议 **1200×630**，PNG 或 JPG）
- 或修改 [`../setup/make-og-image.py`](../setup/make-og-image.py) 后重新生成（配色与站点一致）

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
