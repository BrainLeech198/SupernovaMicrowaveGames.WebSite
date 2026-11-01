# Supernova Microwave Games 官网首版

> **Owner**：用户（工作室所有者）
> **状态**：Astro 静态站已搭建，GitHub Pages 自动部署工作流已配置
> **适用范围**：`web/` 内的工作室官网首版；该目录目前被元仓忽略，计划单独建仓为 `SupernovaMicrowaveGames.Website`
> **最后评审**：2026-11-01

## 目标与现状

建立一个中文优先、适配桌面与手机的工作室单页官网。工作室主身份仍是独立游戏工作室；软件作品按成员归属展示，游戏继续作为官网主内容。

`web/` 是官网独立仓库 `SupernovaMicrowaveGames.Website`。代码先推送到 Gitee，再由已配置的 Gitee→GitHub 镜像同步；GitHub Actions 从 GitHub 仓库构建并部署 Pages。

## 已拍板决定

| 方面 | 决定 | 理由 | 备选与取舍 |
|---|---|---|---|
| 内容层级 | 两款游戏是主要作品；个人开源软件归入对应成员资料 | 访客先看到工作室游戏，再从成员找到其个人开源软件，作品与创作者关系更清楚 | 只放 GitHub / Gitee 账号链接会藏掉具体产品；软件独立成区会弱化成员与作品的归属关系 |
| 页面语言 | 中文为主，保留英文工作室名和作品原名 | 工作室已有中英文正式名称，用户选择了中文主站 | 本阶段不做语言切换，避免重复维护一套未经确认的译文 |
| 视觉方向 | 深色宇宙底色，微波炉暖光作强调 | 延续“日常家电 × 宇宙现象”的工作室概念 | 不采用明亮手作画册或中性开发者作品集方向 |
| 页面导航 | 桌面页头吸顶，锚点预留 88 px；手机页头保持静态并预留 24 px；首屏主按钮写“浏览游戏作品” | 桌面滚动时持续保留导航，手机不压缩首屏空间，按钮直接说明去向 | 不增加移动端吸顶栏，避免占用窄屏高度 |
| 键盘跳过导航 | 主内容 `<main id="main">` 可接收程序化焦点（`tabindex="-1"`），但不加入普通 Tab 顺序 | 激活“跳到主要内容”后，键盘焦点与滚动位置一起进入正文；接下来的 Tab 到首屏主按钮 | 不用 JavaScript 手动接管焦点，保留原生锚点导航 |
| 游戏图像 | 现有仓库没有可直接使用的宣传截图；先用 CSS 抽象装饰，不伪装成游戏画面 | Shoreleave 只有字体资产，TomeisleBay 只有模板 UI 资源；避免对外误导 | 后续由用户提供或确认实际游戏画面后替换 |
| 技术实现 | Astro + TypeScript，输出静态 HTML；保留现有 CSS 视觉 | 组件、类型化内容和静态构建为后续扩展提供清晰边界，也适合托管静态站点 | 暂不引入客户端框架和运行时服务 |
| Pages 部署 | GitHub Pages 使用 GitHub Actions，构建 `dist/`；Astro `base` 指向仓库子路径 | Astro 源码不是可直接发布的网页目录，Actions 可在部署前完成构建 | 不从仓库 root 或 `/docs` 直接发布源码 |

## 页面内容

1. 顶部工作室名称与页内导航，提供游戏、成员和工作室简介入口。
2. 首屏呈现工作室身份与“日常家电 × 宇宙现象”的品牌概念。
3. 游戏作品区展示 Shoreleave 与 TomeisleBay。Shoreleave 使用 `project/Shoreleave/doc/PLAN.md` 的已定一句话定位；TomeisleBay 目前没有可核实的游戏简介，因此只展示项目名与开发状态，不编造玩法。
4. “工作室成员”区目前展示已知成员账号 `BrainLeech198`，提供 GitHub / Gitee 主页，并在其资料下展示 Claude 启动器与星芒记录者；各项目保留公开源码链接，星芒记录者同时链接到产品页。
5. 下方保留工作室简介。GitHub / Gitee 个人入口集中在成员资料中，避免和工作室简介重复。

## 文件职责

- `README.md`：本设计决定、本地开发方法与验收结果。
- `package.json` / `package-lock.json`：Astro、TypeScript 与检查/构建命令。
- `astro.config.mjs` / `tsconfig.json`：静态输出和严格 TypeScript 配置。
- `src/pages/index.astro`：单页入口，组装站点各区块。
- `src/layouts/SiteLayout.astro`：文档标题、语言、主题色、描述和全局样式入口。
- `src/components/`：页头、首屏、游戏、成员、工作室介绍和页脚等展示组件。
- `src/data/siteContent.ts`：游戏、成员及成员个人软件的类型化内容数据。
- `src/styles/global.css`：沿用原有设计的响应式样式、装饰与键盘焦点样式。
- `.gitignore`：为未来单独建立官网仓库忽略依赖、构建产物和 Astro 缓存。
- `.github/workflows/deploy.yml`：`main` 更新时构建 Astro 并上传 Pages artifact，再部署到 GitHub Pages。

## 本地预览

先安装依赖，再从 `web/` 目录启动开发预览：

```powershell
npm install
npm run dev
```

默认访问 `http://127.0.0.1:4321/`。常用命令：

```powershell
npm run check  # Astro 与 TypeScript 静态检查
npm run build  # 生成可部署到静态托管的 dist/
npm run preview  # 本地预览构建产物
```

## GitHub Pages

在 GitHub 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。无需选择 `/(root)` 或 `/docs`。每次 Gitee 推送镜像到 GitHub 的 `main` 后，Actions 会构建并部署到：

`https://brainleech198.github.io/SupernovaMicrowaveGames.WebSite/`

## 当前首版的未决内容

- Tomeisle Bay 目前没有可公开的游戏简介或实际画面；卡片只保留名称与状态说明。
- 两款游戏尚未配置卡片目标链接，因为当前没有确认过的游戏详情页、商店页或公开项目页地址。确定目标后再接链接，不把代码仓库默认当作玩家入口。
- 页面视觉与文案仍待用户看过实际预览后验收；CSS 插画是品牌装饰，不代表游戏画面。

## 验证结果

- `npm run check`：Astro 与 TypeScript 检查通过，0 errors / 0 warnings / 0 hints。
- `npm run build`：成功输出静态 `dist/index.html`。
- Astro 本地开发页返回 HTTP 200；浏览器 DOM 检查确认游戏、成员、个人软件内容及导航锚点均存在。
- 新窗口外链带 `rel="noreferrer"`；跳过导航链接将焦点带到 `<main tabindex="-1">`。
- Codex 内置浏览器检查首屏视觉与内容：中文品牌标题、暖色主按钮、游戏与成员内容均可见；在 628 px 窄视口页头为静态布局，文档无横向溢出。CSS 已定义 900 px 与 680 px 两个布局断点。
- 页内链接目标全部存在；点击游戏导航会更新到 `#games`，成员、工作室和回顶链接亦有目标。
- 键盘验证：激活“跳到主要内容”后地址变为 `#main` 且活动焦点为 `MAIN`；再按 Tab，焦点到“浏览游戏作品”。
- 本地 Astro 检查和静态构建通过；GitHub Pages Source 已配置为 GitHub Actions，最新部署成功，站点返回 HTTP 200。
- Gitee 是本地 `origin` 推送目标；GitHub 仓库由 Gitee 镜像同步，镜像提交触发 GitHub Actions 构建和部署。

## 实现边界

- 不修改游戏仓、工作室根目录的 `.gitignore` 或任何既有文件。
- 不增加真实游戏截图、项目功能声明、发行日期、用户评价或联系地址。
- 当前只展示已知成员账号 `BrainLeech198`，不推断真实姓名、职位或其他成员信息；新增成员时按同一结构添加其个人主页与软件清单。
- 不将本地 `dist/` 提交到仓库；由 GitHub Actions 每次构建生成并部署。
- 用户后续提供 TomeisleBay 简介或游戏截图后，再替换相应内容；不自行补写其玩法。
