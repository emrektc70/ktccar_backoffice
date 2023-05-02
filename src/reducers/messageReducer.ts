import { AnyAction } from "redux";


type State = {};
const initialState: State = {};

const messageReducer = (
  state = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    default:
      return state as State;
  }
};

export default messageReducer;
