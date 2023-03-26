import { AnyAction } from "redux";

type State = {
  token: string;
};

const initialState: State = {
  token: "",
};

const authenticationReducur = (
  state = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    default:
      return state as State;
  }
};

export default authenticationReducur;
