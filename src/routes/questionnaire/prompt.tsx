import { useLoaderData } from "react-router-dom";
import type { Skill } from "../../data";
import { useData, useDataDispatch } from "../../context";

import "./questionnaire.css";
import { Checkbox } from "../../components";
import { Competencies } from "../../data";
import { Examples } from "./examples";

export const Prompt = () => {
  const { skill } = useLoaderData() as { skill: Skill };
  const { skills } = useData();
  const dispatch = useDataDispatch();

  const skillState = skills?.[skill.id] ?? {};
  const competency = Competencies[skill.competency];

  return (
    <div id="prompt">
      <h3>{competency.title}</h3>
      <label htmlFor={skill.id}>
        <h4>{skill.description}</h4>
      </label>
      <Checkbox
        id={skill.id}
        labelledBy={skill.id}
        checked={skillState.checked ?? false}
        style={{ paddingTop: "2em" }}
        handleClick={() =>
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
          )
        }
      />
      {skillState.checked ? (
        <Examples skillId={skill.id} examples={skillState.examples ?? {}} />
      ) : null}
    </div>
  );
};
