# 个人主页 —— 使用说明

一个零依赖的纯 HTML/CSS 个人主页，专为 GitHub Pages 准备。

## 文件结构

```
site/
├── index.html        主页（所有要改的文字都在这里）
├── 404.html          访问不存在页面时显示
├── assets/
│   └── style.css     样式（配色、字号、间距）
├── preview.ps1       本地预览脚本
├── .nojekyll         告诉 GitHub Pages 不要用 Jekyll 处理（勿删）
└── README.md         本文件
```

没有构建步骤：改完文件直接刷新浏览器就能看到效果。

---

## 一、本地预览

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File D:\hykmmq\site\preview.ps1
```

会自动打开 `http://localhost:8000/`。按 `Ctrl+C` 停止。

> 也可以直接双击 `index.html` 用浏览器打开，效果基本一致。

---

## 二、改成你自己的内容

打开 `index.html`，搜索 `改成你的`，会看到所有需要替换的地方：

| 位置 | 现在的内容 | 要改成 |
|---|---|---|
| `<title>` | 张三 · 个人主页 | 你的名字 |
| 页头 `.brand` | 张三 | 你的名字或昵称 |
| 首屏 `<h1>` | 你好，我是张三 | 你的自我介绍开场 |
| `.lead` | 一句话简介 | 你是谁、在做什么 |
| 关于 | 两段示例 | 你的背景与技能 |
| `.tags` | JavaScript… | 你的技能标签 |
| 文章与项目 | 三条示例 | 你的文章/项目（不用的删掉） |
| 联系 | you@example.com 等 | 你的真实联系方式 |
| 页脚 | 张三 | 你的名字 |
| `github.com/yourname` | 占位用户名 | 你的 GitHub 用户名（多处） |

### 加头像

1. 把图片放到 `assets/` 目录，命名为 `avatar.jpg`
2. 在 `index.html` 里取消这一行的注释（删掉 `<!--` 和 `-->`）：
   ```html
   <!-- <img class="avatar" src="assets/avatar.jpg" alt="我的头像" width="112" height="112"> -->
   ```

### 加一篇文章

复制 `#posts` 里任意一个 `<li class="card">…</li>` 整块，改标题、描述和日期。
想写长文的话，另存为 `posts/文章名.html`，然后把卡片的 `href="#"` 改成 `href="posts/文章名.html"`。

### 换配色

只改 `assets/style.css` 顶部 `:root` 里的变量，例如把主色改成绿色：

```css
--accent:    #16a34a;
```

深色模式的颜色在下面的 `@media (prefers-color-scheme: dark)` 里，站点会自动跟随系统主题切换。

---

## 三、部署到 GitHub Pages

完整步骤见 [`../DEPLOY.md`](../DEPLOY.md)。

要点：
- 站点文件放在仓库**根目录**（`index.html` 必须在最外层）
- 仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`
- 免费网址形如 `https://你的用户名.github.io/`

---

## 四、修改后的更新流程

```powershell
cd D:\hykmmq\site
git add -A
git commit -m "更新内容"
git push
```

推送后 GitHub 会自动重新构建，通常 1 分钟内生效。若没变化，强制刷新
（Windows 上 `Ctrl+F5`）或等一两分钟。
