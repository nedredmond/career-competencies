import type { Matrix } from "../../data";
import { SkillItem } from "./skill";

type Expectation = (typeof Matrix)[number]["expectations"][number];

export const ExpectationItem = ({
  expectation,
}: {
  expectation: Expectation;
}) => (
  <details key={expectation.key}>
    <summary>{expectation.title}</summary>
    {expectation.skills.map((skill) => (
      <SkillItem key={skill.id} skill={skill} />
    ))}
  </details>
);
