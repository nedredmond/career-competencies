import { NavLink } from "react-router-dom";
import type { Skill } from "../../data";

export const SkillItem = ({ skill }: { skill: Skill }) => (
  <p>
    <NavLink to={`/questionnaire/prompt/${skill.id}`}>
      {skill.description}
    </NavLink>
  </p>
);
