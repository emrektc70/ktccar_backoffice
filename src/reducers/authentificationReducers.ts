import { AnyAction } from "redux";
import { SET_AUTHENTIFICATION_FIELDS } from "../actions/authentification";

type State = {
  token: string;
  password: string;
  email: string;
};

const initialState: State = {
  token: "",
  password: "",
  email: "",
};

const authenticationReducur = (
  state = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    case SET_AUTHENTIFICATION_FIELDS:
      return {
        ...state,
        [action.field]: action.value,
      } as State;
    default:
      return state as State;
  }
};

export default authenticationReducur;
