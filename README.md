# jetaimais6.github.io

我的个人主页 —— 纯 HTML/CSS，零依赖、无构建步骤。

🌐 <https://jetaimais6.github.io/>

## 结构

```
.
├── index.html        主页
├── 404.html          404 页面
├── assets/
│   └── style.css     样式
├── .gitattributes    换行符规范
├── .nojekyll         跳过 Jekyll 处理
└── README.md         本文件
```

## 本地预览

直接双击 `index.html`，或用任意静态服务器：

```bash
python -m http.server 8000
```

## 自定义

**配色**：改 `assets/style.css` 顶部 `:root` 里的变量。

```css
--accent:    #2563eb;   /* 主色 */
--maxw:      720px;     /* 内容最大宽度 */
```

**内容**：直接编辑 `index.html`。深色模式在 `@media (prefers-color-scheme: dark)` 中，
会自动跟随系统主题切换。

**头像**：把图片放到 `assets/avatar.jpg`，然后取消 `index.html` 中 `<img class="avatar">`
那一行的注释。

## 部署

推送到 `main` 分支即自动部署（GitHub Pages，构建约 1 分钟）：

```bash
git add -A
git commit -m "更新内容"
git push
```

## 特性

- 响应式，移动端适配
- 自动深色模式
- 键盘可访问（跳转链接、焦点样式）
- 自定义 404 页
- 无 JavaScript 框架依赖

## License

内容版权归作者所有；代码部分可自由参考。
