import type { Level, Skill, Track, UUID } from "../data";

type SkillAction = {
  type: "checked" | "unchecked";
  data: Skill;
};
type ExamplesChangedAction = {
  type: "examples-updated";
  data: {
    examples: {
      [key: UUID]: string;
    };
    skillId: UUID;
  };
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

type User = {
  firstName: string;
  lastName: string;
  email: string;
  track: Track;
  declaredLevel: Level;
};
export type State = {
  skills?: Record<UUID, { checked?: boolean; examples?: string[] }>;
  user?: User;
};
