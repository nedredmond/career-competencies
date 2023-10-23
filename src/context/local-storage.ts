import type { State } from "./types";

export const getData = (): State => {
  const data = localStorage.getItem("competenciesData");
  return data ? JSON.parse(data) : {};
};
export const setData = (data: State) =>
  localStorage.setItem("competenciesData", JSON.stringify(data));
