import { useLoaderData } from "react-router-dom";
import type { Skill } from "../../data";

export const Prompt = () => {
  const { skill } = useLoaderData() as { skill: Skill };
  return (
    <div className="prompt">
      <h1>{skill.competency}</h1>
      <h2>{skill.expectation}</h2>
      <p>{skill.description}</p>
    </div>
  );
};
