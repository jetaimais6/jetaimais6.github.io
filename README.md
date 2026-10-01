# jetaimais6.github.io — 个人主页

纯 HTML/CSS 静态个人主页，托管在 GitHub Pages，**零依赖、无构建步骤**。

- 🌐 线上地址：<https://jetaimais6.github.io/>
- 📦 仓库：<https://github.com/jetaimais6/jetaimais6.github.io>
- 📁 本地目录：`D:\hykmmq\site`

## 文件结构

```
.
├── index.html        主页（要改的文字都在这里）
├── 404.html          访问不存在页面时显示
├── assets/
│   └── style.css     样式（配色、字号、间距）
├── preview.ps1       本地预览脚本
├── .gitattributes    统一换行符（勿删）
├── .nojekyll         告诉 GitHub Pages 不要用 Jekyll 处理（勿删）
└── README.md         本文件
```

---

## 本地预览

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File D:\hykmmq\site\preview.ps1
```

会自动打开 <http://localhost:8000/>。按 `Ctrl+C` 停止。

> 也可以直接双击 `index.html` 用浏览器打开，效果基本一致。

---

## 改成你自己的内容

打开 `index.html`，搜索 `改成你的`，逐个替换：

| 位置 | 要改成 |
|---|---|
| `<title>` / `og:title` | 你的名字或站点名 |
| 页头 `.brand` | 你的名字或昵称 |
| 首屏 `<h1>` 和 `.lead` | 你的自我介绍 |
| 「关于」两段 | 你的背景与技能 |
| `.tags` | 你的技能标签 |
| 「文章与项目」 | 你的文章/项目（不用的删掉） |
| 「联系」 | 你的真实联系方式（删掉不用的行） |
| 页脚 | 你的名字 |

### 加头像

1. 把图片放到 `assets/`，命名为 `avatar.jpg`
2. 取消 `index.html` 里这一行的注释（删掉 `<!--` 和 `-->`）：
   ```html
   <!-- <img class="avatar" src="assets/avatar.jpg" alt="我的头像" width="112" height="112"> -->
   ```

### 加一篇文章

复制 `#posts` 里任意一个 `<li class="card">…</li>` 整块，改标题、描述、日期。
想写长文就另存为 `posts/文章名.html`，再把卡片的 `href="#"` 改成 `href="posts/文章名.html"`。

### 换配色

只改 `assets/style.css` 顶部 `:root` 里的变量：

```css
--accent:    #16a34a;   /* 主色，改成你喜欢的 */
```

深色模式颜色在下面的 `@media (prefers-color-scheme: dark)` 里，站点会自动跟随系统主题。

---

## 更新流程

```powershell
cd D:\hykmmq\site
git add -A
git commit -m "更新内容"
git push
```

推送后 GitHub 会自动重新构建，通常 **1 分钟内**生效。没变化就强制刷新（`Ctrl+F5`）或再等一会。

查构建状态：

```powershell
gh run list --repo jetaimais6/jetaimais6.github.io --limit 3
```

---

## 提示

- **不要删除 `.nojekyll`**：否则 Jekyll 会忽略下划线开头的文件/目录。
- **文件名区分大小写**：`assets/style.css` 写成 `Assets/` 在本地能打开，上线就会丢样式。
- **文件请存为 UTF-8**，否则中文可能乱码。

更详细的部署与排错说明见 [`../DEPLOY.md`](../DEPLOY.md)。
