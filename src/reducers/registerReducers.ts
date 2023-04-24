import { AnyAction } from "redux";
import { SET_REGISTER_FIELDS } from "../actions/register";

type State = {
  token: string;
  passwordRegister: string;
  emailRegister: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
};

const initialState: State = {
  token: "",
  passwordRegister: "",
  emailRegister: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  username: "",
};

const registerReducer = (
  state = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    case SET_REGISTER_FIELDS:
      return {
        ...state,
        [action.field]: action.value,
      } as State;
    default:
      return state as State;
  }
};

export default registerReducer;
