export interface HeroChip {
  label: string;
  style: "P" | "C" | "G";
}

export const hero = {
  eyebrow: "Senior RPA Developer · M.Tech AI/ML @ IIT Jodhpur",
  nameFirst: "ANIL",
  nameLast: "MAMIDWAR",
  orbSymbol: "⬡",
  roles: [
    { label: "RPA-UiPath", style: "P" as const },
    { label: "AI/ML & GenAI,Agentic AI", style: "C" as const },
  ] satisfies HeroChip[],
  taglineHtml:
    "Building <b>scalable automation systems</b> and <b>intelligent workflows</b> at the intersection of enterprise RPA and applied machine learning (GenAI/RAG,Agentic AI).",
  ctaPrimary: { label: "view my work →", target: "projects" },
  ctaGhost: { label: "download resume", target: "resume" },
  floatChips: [
    { label: "VBA · RPA · IPA", style: "P" as const },
    { label: "GenAI · RAG · LLMs", style: "C" as const },
    { label: "9+ years software engineering", style: "G" as const },
  ] satisfies HeroChip[],
};
