export interface Repo {
  name: string;
  desc: string;
  stars: number;
  forks: number;
  lang: string;
  url: string;
  icon: string;
  glow?: boolean;
}

export const repos: Repo[] = [
  {
    name: "AIML_Projects",
    desc: "Projects realted to AI ML that includes Review prediction, malware detection,restaurant visitor forcasting SMS spam classification and others.",
    stars: 3,
    forks: 1,
    lang: "Python",
    url: "https://github.com/anilmamidwar15021991/AIML_Projects",
    icon: "⬡",
    glow: true,
  },
  {
    name: "AIML Learning",
    desc: "Clear, well-explained implementations of AI ML topics in Python. Built for learning, not just reference.",
    stars: 0,
    forks: 0,
    lang: "Python",
    url: "https://github.com/anilmamidwar15021991/AIMLlearning",
    icon: "◈",
  }
];
