import { AnyAction } from "redux";


type State = {
  message: string;
};
const initialState: State = {
  message: ''
};

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
