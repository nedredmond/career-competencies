import { useLoaderData } from "react-router-dom";
import type { Skill } from "../../data";
import { useData, useDataDispatch } from "../../context";

import "./prompt.css";
import { Checkbox } from "../../components";
import { Competencies } from "../../data";

export const Prompt = () => {
  const { skill } = useLoaderData() as { skill: Skill };
  const { skills } = useData();
  const dispatch = useDataDispatch();

  const skillState = skills?.[skill.id] ?? {};
  const competency = Competencies[skill.competency];

  return (
    <div id="prompt">
      <h3>{competency.title}</h3>
      <label htmlFor={skill.id}><h4>{skill.description}</h4></label>
      <Checkbox
        id={skill.id}
        labelledBy={skill.id}
        checked={skillState.checked ?? false}
        style={{ paddingTop: "2em"}}
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
      {/* {skillState.checked ? (
        <span id="examples">
          <h6>
            Provide some examples of how you have demonstrated this skill.
          </h6>
          {skillState.examples?.map((example, index) => (
            <input
              key={example}
              type="text"
              value={example}
              onChange={(e) => {
                const newExamples = [...(skillState.examples ?? [])];
                newExamples[index] = e.target.value;
                dispatch({
                  type: "examples-updated",
                  data: {
                    id: skill.id,
                    examples: newExamples,
                  },
                });
              }}
            />
          ))}
          <input
            type="text"
            onChange={(e) => {
              const newExamples = [...(skillState.examples ?? [])];
              newExamples[newExamples.length] = e.target.value;
              dispatch({
                type: "examples-updated",
                data: {
                  id: skill.id,
                  examples: newExamples,
                },
              });
            }}
          />
        </span>
      ) : null} */}
    </div>
  );
};
