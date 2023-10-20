import type { State, Action } from "./types";

export const dataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    // add skill to state
    case "checked": {
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.data.id]: {
            ...action.data,
            checked: true,
            examples: state.skills?.[action.data.id]?.examples ?? [],
          },
        },
      };
    }
    // update examples for skill in state
    case "examples-updated": {
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.id]: {
            ...state.skills?.[action.id],
            examples: action.data,
          },
        },
      };
    }
    // remove skill from state without losing examples
    case "unchecked": {
      if (
        !state.skills?.[action.data.id] ||
        !state.skills[action.data.id].checked
      ) {
        throw Error("Cannot uncheck unattained skill");
      }
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.data.id]: {
            ...state.skills?.[action.data.id],
            checked: false,
          },
        },
      };
    }
    // update user data
    case "user-data-updated": {
      return {
        ...state,
        user: action.data,
      };
    }
    // import data
    case "data-imported": {
      return {
        ...action.data,
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
};
