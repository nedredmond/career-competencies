import { useLoaderData } from "react-router-dom";
import type { Skill } from "../../data";
import { useData, useDataDispatch } from "../../context";

import "./prompt.css";
import { Checkbox } from "../../components";

export const Prompt = () => {
  const { skill } = useLoaderData() as { skill: Skill };
  const { skills } = useData();
  const dispatch = useDataDispatch();

  const skillState = skills?.[skill.id] ?? {};

  return (
    <div id="prompt">
      <Checkbox
        labelledBy={""}
        checked={skillState.checked ?? false}
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
      <label htmlFor={skill.id}>{skill.description}</label>
    </div>
  );
};
