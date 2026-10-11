export interface Tag {
  label: string;
  style: "P" | "C" | "G";
}

export interface Project {
  type: string;
  title: string;
  desc: string;
  tags: Tag[];
  featured?: boolean;
  glowC?: boolean;
  url?: string;
}

export const projects: Project[] = [
  {
    type: "ai / intelligent automation",
    title: "Semantic Search Engine (LLM-based)",
    desc: "Built an enterprise semantic search system to retrieve company policies and documents from SharePoint using LLMs and embeddings. Implemented a RAG pipeline with efficient document indexing and contextual retrieval.",
    tags: [
      { label: "LLM", style: "P" },
      { label: "RAG", style: "P" },
      { label: "Python", style: "G" },
      { label: "PostgreSQL", style: "G" },
      { label: "Docker", style: "C" },
      { label: "AWS EC2", style: "C" },
    ],
    featured: true,
  },
  {
    type: "rpa / intelligent automation",
    title: "Invoice Reconciliation & Processing System",
    desc: "Automated reconciliation of PDF invoices against web and desktop applications using UiPath and APIs. Reduced manual effort significantly by integrating document understanding, OCR, and rule-based validation.",
    tags: [
      { label: "UiPath", style: "P" },
      { label: "Document Understanding", style: "P" },
      { label: "OCR", style: "C" },
      { label: "REST APIs", style: "G" },
    ],
  },
  {
    type: "enterprise automation",
    title: "Subscription Usage Reporting Platform",
    desc: "Developed an enterprise-grade reporting system serving 30+ clients using UiPath automation and MSSQL. Generated automated reports and dashboards, saving over $65K annually and improving reporting efficiency.",
    tags: [
      { label: "UiPath", style: "P" },
      { label: "MSSQL", style: "G" },
      { label: "Power BI", style: "C" },
      { label: "Automation", style: "P" },
    ],
  },
  {
    type: "rpa / system integration",
    title: "Enterprise RPA Integration Framework",
    desc: "Designed scalable RPA solutions integrating UiPath with enterprise systems like Outlook, SharePoint, Salesforce, and Jira. Built reusable components and optimized bot performance and license utilization.",
    tags: [
      { label: "UiPath", style: "P" },
      { label: "SharePoint", style: "G" },
      { label: "Salesforce", style: "G" },
      { label: "REST APIs", style: "G" },
    ],
  },
  {
    type: "rpa / process optimization",
    title: "Document Processing & Data Extraction Automation",
    desc: "Built intelligent automation workflows for extracting and processing data from PDFs, emails, and enterprise systems using OCR and rule-based logic, achieving up to 60% reduction in processing time.",
    tags: [
      { label: "UiPath", style: "P" },
      { label: "OCR", style: "C" },
      { label: "Excel Automation", style: "G" },
      { label: "Data Extraction", style: "P" },
    ],
  },
  {
    type: "ai / ml",
    title: "Text Summarization & NLP Pipelines",
    desc: "Developed NLP-based solutions including text summarization and classification using Python and transformer-based models, enabling faster document insights and improved decision-making workflows.",
    tags: [
      { label: "Python", style: "G" },
      { label: "Transformers", style: "P" },
      { label: "NLP", style: "P" },
      { label: "Scikit-learn", style: "C" },
    ],
  }
];