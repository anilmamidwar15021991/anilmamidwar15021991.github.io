export interface TimelineNode {
  year: string;
  role: string;
  org: string;
  detail: string;
  logo?: string;
  active?: boolean;
}

export const experienceNodes: TimelineNode[] = [
  
  {
    year: "Jun 2025 - Present",
    role: "RPA Developer III",
    org: "Mouser Electronics",
    logo: "/logos/mouser.svg",
    detail:
      "Leading the end-to-end RPA lifecycle, from requirement analysis to solution design, development, and deployment. Architecting scalable automation solutions using UiPath and cloud services, driving enterprise-wide process optimization and intelligent automation adoption.",
    active: true,
  },
  {
    year: "Apr 2021 - Jun 2025",
    role: "Software Engineer",
    org: "Comscore Inc",
    logo: "/logos/comscore.svg",
    detail:
      "Led multiple RPA initiatives including requirement gathering (PDD/SDD), development, testing, and deployment using UiPath cloud services (Orchestrator, Apps, Integration Service, Document Understanding). Delivered solutions saving over $100K annually and built scalable, reusable automation frameworks. Integrated automation with Outlook, SharePoint, Salesforce, and REST APIs while optimizing bot performance and capacity utilization.",
  },
  {
    year: "Jan 2017 - Mar 2021",
    role: "Senior Application Developer",
    org: "Arthur J. Gallagher & Co",
    logo: "/logos/gallagher.svg",
    detail:
      "Developed end-to-end automation solutions using UiPath, VBA, and REST APIs across web, desktop, and enterprise applications. Reduced process execution time by up to 60% through intelligent automation. Worked extensively on document processing, OCR, Citrix automation, and database integrations while managing deployments across QA, UAT, and production environments.",
  }
];

export const resumeUrl: string | null = null;
