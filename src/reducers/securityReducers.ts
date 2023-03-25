import { AnyAction } from "redux";

type State = {
  isLog: boolean;
};

const initialState: State = {
  isLog: true,
};

const securityReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    default:
      return state as State;
  }
};

export default securityReducer;
