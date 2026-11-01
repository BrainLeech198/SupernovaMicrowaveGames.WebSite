export interface GameProject {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  status: string;
  art: "island" | "bay";
  artLabel: string;
  description: string;
}

export interface SoftwareProject {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  links: { label: string; href: string }[];
}

export interface StudioMember {
  slug: string;
  number: string;
  name: string;
  role: string;
  github: string;
  gitee: string;
  software: SoftwareProject[];
}

export const games: GameProject[] = [
  {
    slug: "shoreleave",
    number: "01 — 02",
    title: "Shoreleave",
    subtitle: "上岸休假",
    status: "游戏开发中",
    art: "island",
    artLabel: "SHORE / 01",
    description: "低多边形小岛慢生活模拟——上岸休假，休着休着就不走了。",
  },
  {
    slug: "tomeisle",
    number: "02 — 02",
    title: "Tomeisle Bay",
    status: "游戏开发中",
    art: "bay",
    artLabel: "TOMEISLE / 02",
    description: "项目介绍与实际游戏画面尚未公布。",
  },
];

export const members: StudioMember[] = [
  {
    slug: "brainleech198",
    number: "MEMBER / 01",
    name: "BrainLeech198",
    role: "工作室成员",
    github: "https://github.com/BrainLeech198",
    gitee: "https://gitee.com/Mr_BrainLeech",
    software: [
      {
        number: "A / 01",
        title: "Claude 启动器",
        description: "Windows 上管理工作区与 AI 编程会话的图形工具。",
        links: [{ label: "GitHub 源码", href: "https://github.com/BrainLeech198/claude_tool" }],
      },
      {
        number: "A / 02",
        title: "星芒记录者",
        subtitle: "Starburst Recorder",
        description: "本地优先的个人记录工具，内置 AI，支持 Windows 与 Android。",
        links: [
          { label: "产品页", href: "https://brainleech198.github.io/starburst_recorder/" },
          { label: "GitHub 源码", href: "https://github.com/BrainLeech198/starburst_recorder" },
        ],
      },
    ],
  },
];
