import type { ReactNode } from "react";
import { useEffect, useReducer } from "react";
import { dataReducer } from "./reducer";
import { DataContext, DataDispatchContext } from "./context";
import { getData } from "./get-data";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [userCompetencies, dispatch] = useReducer(dataReducer, getData());

  useEffect(() => {
    localStorage.setItem("competenciesData", JSON.stringify(userCompetencies));
  }, [userCompetencies]);

  return (
    <DataContext.Provider value={userCompetencies}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
};
