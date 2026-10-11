export interface Award {
  title: string;
  year: string;
  org: string;
  logo?: string;
}

export const awards: Award[] = [
  {
    title: "UiPath Agentic AI Professional",
    year: "2026",
    org: "UiPath",
    logo: "/logos/uipath.svg",
  },
  {
    title: "AWS Certified AI Practitioner",
    year: "2026",
    org: "AWS",
    logo: "/logos/aws.svg",
  },
  {
    title: "Certified UiPath Developer",
    year: "2020",
    org: "UiPath",
    logo: "/logos/uipath.svg",
  },
  {
    title: "IBM Watson Chatbot Developer",
    year: "2020",
    org: "Cognitive Class.ai",
    logo: "/logos/ibm.svg",
  },
  {
    title: "Foundation of Artificial Intelligence (AI) Certificate",
    year: "2020",
    org: "SkillUp",
    logo: "/logos/skillup.svg",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    year: "2019",
    org: "ScrumStudy",
    logo: "/logos/scrumstudy-sfc.png",
  },
];
