const Competencies = {
  deliveringResults: {
    title: "Delivering Results",
    exampleSkills:
      "Scoping and prioritization, Testing and monitoring, Shipping to production, Initiative",
  },
  domainExpertise: {
    title: "Domain Expertise",
    exampleSkills:
      "Knowledge of your discipline (e.g. Security, Accessibility, Performance), Language, Tools, Product sense",
  },
  problemSolving: {
    title: "Problem Solving",
    exampleSkills:
      "Architecture & design patterns, Breaking down large problems, Critical thinking, Analytical skills, Creativity, Decision making",
  },
  communication: {
    title: "Communication",
    exampleSkills:
      "Documentation, Collaboration, Relationship-building, Interviewing, Listening, Empathy",
  },
  leadership: {
    title: "Leadership",
    exampleSkills:
      "Accountability, Responsibility, Mentorship, Making hard decisions, Setting an example",
  },
} as const;

type Competency = keyof typeof Competencies;

export { Competencies };
export type { Competency };
