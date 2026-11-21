# Supernova Microwave Games 官网

> **Owner**：用户（工作室所有者）
> **状态**：Astro 静态站，页面内容与视觉持续完善
> **适用范围**：`SupernovaMicrowaveGames.Website` 工作室官网仓库
> **最后评审**：2026-11-21

## 网站目标

这是一个中文优先的独立游戏工作室官网，以工作室正在制作的游戏为主，工作室成员区只提供成员账号与个人主页入口。个人开源软件归成员自己的主页展示，和工作室游戏分开展示。

官网仓库采用 Astro + TypeScript，构建为静态页面。代码先推送到 Gitee，再由 Gitee→GitHub 镜像同步；GitHub Actions 从 GitHub 仓库构建并部署 GitHub Pages。

## 页面结构与视觉方向

| 区域 | 内容与行为 |
|---|---|
| 页头 | 横向展示 SMG 标志、工作室中英文名称与游戏/成员/关于导航 |
| 首屏 | 使用 Shoreleave 实际游戏画面作为横幅，显示作品名称、简介和游戏区入口 |
| 工作室介绍 | 展示中文辅助字标、可点击的微波炉吉祥物与工作室简介 |
| 游戏作品 | Shoreleave 使用实际游戏画面展示带；Tomeisle Bay 使用深色文字展示带，两款都显示开发状态 |
| 成员 | 深色品牌区只列成员账号及 GitHub / Gitee 个人主页 |
| 页脚与版权声明 | 页脚提供版权入口，静态 `/copyright/` 页面列出三项品牌素材及其来源和使用边界 |

视觉使用 Logo 的海军蓝（`#081028`）、奶油白（`#FFF7EC`）和橙红（`#F84010`）。首页参考 Capybara Games 的游戏优先节奏：横向页头、真实游戏画面、简洁工作室介绍和作品目录；不使用其品牌素材。Shoreleave 展示图从项目原图转换为约 433 KB 的 WebP，Tomeisle Bay 不使用未确认的游戏画面。

## 文件职责

- `src/pages/index.astro`：单页入口，组合各内容区块。
- `src/pages/copyright.astro`：静态品牌素材版权与来源声明页。
- `src/layouts/SiteLayout.astro`：页面语言、标题、主题色、描述和全局样式入口。
- `src/components/`：页头、首屏、游戏项目条目、成员名单、工作室简介和含版权入口的页脚。
- `src/data/siteContent.ts`：游戏和成员名单的类型化内容数据、已确认的游戏图路径及可选官网地址。
- `src/styles/global.css`：色彩、排版、横幅与作品条目、响应式布局、键盘焦点和减少动态效果设置。
- `public/game-art/shoreleave.webp`：由 `project/Shoreleave/asset/ui/tscn/menu/background.png` 转换的官网展示图，供横幅和缩略图共用。
- `.github/workflows/deploy.yml`：`main` 更新时构建 Astro 并部署 Pages。

新增或修改已确认的项目名称、简介、状态和官网地址时，编辑 `src/data/siteContent.ts`；给某款游戏填入 `website: "https://..."` 后，作品展示带自动成为可点击的官网入口。成员和个人主页入口也在这里维护。首屏文案编辑 `src/components/HeroSection.astro`，吉祥物互动在 `src/components/StudioSection.astro`，视觉调整编辑 `src/styles/global.css`。

## 本地开发

从 `web/` 目录执行：

```powershell
npm install
npm run dev
```

默认访问 `http://127.0.0.1:4321/SupernovaMicrowaveGames.WebSite/`。检查与构建命令：

```powershell
npm run check
npm run build
npm run preview
```

## GitHub Pages

GitHub 仓库 **Settings → Pages → Build and deployment → Source** 应选择 **GitHub Actions**，无需从仓库 root 或 `/docs` 直接发布源码。Astro 构建产物为 `dist/`。

官网地址：

`https://brainleech198.github.io/SupernovaMicrowaveGames.WebSite/`

## 内容边界

- Tomeisle Bay 目前只公开名称和开发状态；收到确认内容后再补简介和图片。
- 两款游戏尚未确认公开官网地址；在 `website` 字段填入真实地址前，作品展示带不显示访问入口。
- 当前只展示已知成员 BrainLeech198；不推断成员真实姓名、职位或其他成员信息。
- 不在工作室官网混排成员的个人开源软件。
- 不将 `dist/` 和 Astro 缓存提交到仓库；Pages 由 GitHub Actions 构建发布。

## 本轮验证

- `npm run check`：Astro / TypeScript 检查通过，0 errors / 0 warnings / 0 hints。
- `npm run build`：静态构建成功，生成首页 `dist/index.html` 与版权页 `dist/copyright/index.html`。
- 本地浏览器检查：1264×800 桌面与 390×844 手机视口均显示两种作品展示带和成员深色区域；游戏与成员锚点可用。
- 桌面与手机均点击吉祥物，出现“叮！”反馈；点击版权入口后，版权页显示完整的 Supernova Microwave Games 署名。

## 品牌素材版权声明

以下三项图像均为 SupernovaMicrowaveGames 使用 OpenAI ImageGen 按工作室负责人要求生成并选定的品牌素材，未作图像内容修改：

| 文件 | 用途 | 来源 |
|---|---|---|
| `public/branding/supernova-microwave-mascot.png` | 拿手柄的微波炉角色 Logo | OpenAI ImageGen，2026-11-21 生成 |
| `public/branding/supernova-microwave-smg.png` | SMG 标志 Logo | OpenAI ImageGen，2026-11-21 生成 |
| `public/branding/supernova-microwave-wordmark-zh.png` | 中文辅助字标 | OpenAI ImageGen，2026-11-21 生成 |

**版权声明：** © 2026 Supernova Microwave Games. All rights reserved. 这些图像作为工作室品牌素材保留所有权利；公开展示不构成开源授权。未经工作室书面许可，不得将其复制、再发布、改编、再授权，或作为其他组织与产品的品牌标识使用。

OpenAI《[使用条款](https://openai.com/policies/terms-of-use/)》规定，在 OpenAI 与用户之间且适用法律允许的范围内，用户拥有生成输出；条款同时说明生成输出可能不唯一、其他用户可能获得相似输出。因此，本声明记录工作室对这些素材的权利主张与许可边界，但不代表已完成商标近似检索，也不保证所有司法辖区对 AI 生成图像的版权认定或注册结果。

© 2026 Supernova Microwave Games
