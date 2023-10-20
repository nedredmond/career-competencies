export const Expectations = [
  "beginner",
  "intermediate",
  "advanced",
  "expert",
  "leading expert",
] as const;
export type Expectation = (typeof Expectations)[number];

// These may need to be split into levels for different tracks in the future
export const Levels = [
  "SRP I",
  "LEC 1 (Senior 1)",
  "LEC 2 (Staff/Architect)",
  "LEC X (Principal & Distinguished)",
  "SRP II",
  "LEC 1 (Senior 2)",
  "LEC 2 (Senior Staff/Architect)",
] as const;
export type Level = (typeof Levels)[number];

export const ExpectationLevelMap: {
  [key in Exclude<Expectation, "leading expert">]: Level;
} & {
  partial: {
    [key in Exclude<Expectation, "leading expert" | "beginner">]: Level;
  };
} = {
  beginner: "SRP I",
  intermediate: "LEC 1 (Senior 1)",
  advanced: "LEC 2 (Staff/Architect)",
  expert: "LEC X (Principal & Distinguished)",
  partial: {
    intermediate: "SRP II",
    advanced: "LEC 1 (Senior 2)",
    expert: "LEC 2 (Senior Staff/Architect)",
  },
} as const;
