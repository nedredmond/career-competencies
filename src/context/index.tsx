import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";
import type { State, Action } from "./types";
import { dataReducer } from "./reducer";

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
export const useData = () => {
  return useContext(DataContext);
};
export const useDataDispatch = () => {
  return useContext(DataDispatchContext);
};

const DataContext = createContext<State>({});
const DataDispatchContext = createContext<React.Dispatch<Action>>(() => {});

const getData = (): State => {
  const data = localStorage.getItem("competenciesData");
  return data ? JSON.parse(data) : {};
};
