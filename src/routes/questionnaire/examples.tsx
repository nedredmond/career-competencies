import { useRef } from "react";
import { useDataDispatch } from "../../context";
import type { UUID } from "../../data";

export const Examples = ({
  id,
  examples,
}: {
  id: UUID;
  examples: string[];
}) => {
  const dispatch = useDataDispatch();
  const itemsRef = useRef<Map<string, HTMLInputElement>>();

  const getMap = () => {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const setMap = (example: string, node: HTMLInputElement | null) => {
    const map = getMap();
    if (node) {
      map.set(example, node);
    } else {
      map.delete(example);
    }
  };

  const exampleInputs = [...examples, ""];
  const exampleValues = Array.from(getMap().values()).map((node) => node.value);

  return (
    <div>
      <h3>Examples</h3>
      <ul>
        {exampleInputs.map((example) => (
          <li key={example ?? "new-example"}>
            <input
              ref={(node) => setMap(example, node)}
              value={example}
              onChange={() =>
                dispatch({
                  type: "examples-updated",
                  data: {
                    id,
                    examples: exampleValues.filter((val) => val),
                  },
                })
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
