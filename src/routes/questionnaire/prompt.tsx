import { useLoaderData } from "reactrouter";
import { Competencies, type Skill } from "../../data";
import { useData, useDataDispatch } from "../../context";

import "./questionnaire.css";
import { Checkbox } from "../../components";
import { Examples } from "./examples";
import { SkillNav } from "./skill-nav";

export const Prompt = () => {
  const { skill } = useLoaderData() as { skill: Skill };
  const { skills } = useData();
  const dispatch = useDataDispatch();

  const skillState = skills?.[skill.id] ?? {
    checked: false,
    examples: {},
  };

  const functionalArea = Competencies.find(
    ({ key }) => key === skill.competency,
  )?.functionalArea;

  return (
    <div id="prompt">
      <span style={{ textTransform: "uppercase", fontSize: "0.8em" }}>
        {functionalArea} Competency Skill
      </span>
      <SkillNav skill={skill} />
      <Checkbox
        id={skill.id}
        label={"I can demonstrate this skill: " + skill.description}
        checked={skillState.checked ?? false}
        style={{ paddingTop: "2em" }}
        size="xlarge"
        handleClick={() => {
          dispatch(
            skillState.checked
              ? {
                  type: "unchecked",
                  data: skill,
                }
              : {
                  type: "checked",
                  data: skill,
                },
          );
        }}
      />
      {skillState.checked && (
        <Examples skillId={skill.id} examples={skillState.examples ?? {}} />
      )}
    </div>
  );
};
