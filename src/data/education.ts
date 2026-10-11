export interface EducationNode {
  year: string;
  degree: string;
  school: string;
  detail: string;
  logo?: string;
}

export const educationNodes: EducationNode[] = [
  {
    year: "July 2023 - May 2025",
    degree: "M.Tech - AI & ML",
    school: "Indian Institute of Technology, Jodhpur",
    logo: "/logos/iit-jodhpur.svg",
    detail:
      "Specializing in Artificial Intelligence and Machine Learning. Balancing advanced academic research with full-time leadership.",
  },
  {
    year: "2013 - 2015",
    degree: "M.Tech - Digital Systems & Computer Electronics",
    school: "JNTU Hyderabad",
    logo: "/logos/jntu-hyderabad.png",
    detail:
      "Specialized  degree in Digital Systems and Computer Electronics. Gained deep insights into digital design, computer architecture, and embedded systems, complementing my practical experience in software development and automation. ",
  },
  {
    year: "2008 - 2012",
    degree: "B.Tech - Electronics and telecommunication",
    school: "North Maharashtra University, Jalgaon",
    logo: "/logos/nmu-jalgaon.png",
    detail:
      "Undergraduate degree in Electronics and Telecommunication. Built a strong foundation in electronics, communication systems, and programming.",
  },
  {
    year: "2007 - 2008",
    degree: "12th Standard (CBSE)",
    school: "Kendriya Vidyalaya, Chandrapur",
    logo: "/logos/kvs.svg",
    detail: "Physics, Chemistry, and Mathematics focus.",
  },
  {
    year: "2005 - 2006",
    degree: "10th Standard(CBSE",
    school: "Kendriya Vidyalaya, Chandrapur",
    logo: "/logos/kvs.svg",
    detail: "Junior High/Intermediate/Middle School Education.",
  },
];
