export interface GameProject {
  title: string;
  subtitle?: string;
  status: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  website?: string;
}

export interface StudioMember {
  name: string;
  avatar: string;
  github: string;
  gitee: string;
}

export const games: GameProject[] = [
  {
    title: "Shoreleave",
    subtitle: "上岸休假",
    status: "开发中",
    description: "以海岛为舞台的开放世界休闲游戏。",
    image: "game-art/shoreleave.webp",
    imageAlt: "Shoreleave 的海岛日落视觉概念图，不是游戏实机画面",
    website: "https://brainleech198.github.io/SupernovaMicrowaveGames.WebSite/shoreleave/",
  },
  {
    title: "Tomeisle Bay",
    status: "开发中",
  },
];

export const members: StudioMember[] = [
  {
    name: "BrainLeech198",
    avatar: "https://avatars.githubusercontent.com/u/260578826?s=256&v=4",
    github: "https://github.com/BrainLeech198",
    gitee: "https://gitee.com/Mr_BrainLeech",
  },
];
