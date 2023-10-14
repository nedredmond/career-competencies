export const Expectations = [
  "beginner",
  "intermediate",
  "advanced",
  "expert",
  "leading expert",
] as const;
export type Expectation = (typeof Expectations)[number];

export const ExpectationLevelMap: {
  [key in Exclude<Expectation, "leading expert">]: string;
} & {
  partial: {
    [key in Exclude<Expectation, "leading expert" | "beginner">]: string;
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

export const Levels = Object.keys(ExpectationLevelMap).reduce(
  (acc: string[], key) => {
    if (key === "partial") {
      return acc.concat(...Object.values(ExpectationLevelMap.partial));
    }
    return [
      ...acc,
      ExpectationLevelMap[key as Exclude<Expectation, "leading expert">],
    ];
  },
  []
);
