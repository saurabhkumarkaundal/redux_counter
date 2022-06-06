import * as Action_types from "./Action_types";

const initalState = {
  count: 0,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case Action_types.Incr:
      return {
        ...state,
        count: state.count + 1,
      };
    case Action_types.Decr:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
