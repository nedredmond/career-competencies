import type { Level, Skill, Track } from "../data";

type SkillAction = {
  type: "checked" | "unchecked";
  data: Skill;
};
type ExamplesChangedAction = {
  type: "examples-updated";
  id: Skill["id"];
  data: string[];
};
type UserDataUpdatedAction = {
  type: "user-data-updated";
  data: User;
};
type ImportDataAction = {
  type: "data-imported";
  data: State;
};
export type Action =
  | SkillAction
  | ExamplesChangedAction
  | UserDataUpdatedAction
  | ImportDataAction;

type SkillState = Partial<Skill> & { checked?: boolean; examples?: string[] };
type User = {
  firstName: string;
  lastName: string;
  email: string;
  track: Track;
  declaredLevel: Level;
};
export type State = {
  skills?: Record<Skill["id"], SkillState>;
  user?: User;
};
