import type { Skill } from "../../data";

export const SkillItem = ({ skill }: { skill: Skill }) => (
  <p>{skill.description}</p>
);
