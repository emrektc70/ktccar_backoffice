import { AnyAction } from "redux";
import { SET_MESSAGE_FIELDS } from "../actions/message";


type State = {
  messageResponse: MessageResponse | undefined
  message: string;
  groupId: number;
  isPing: boolean;
  messageChat: any;
  group_id: number;

};
const initialState: State = {
  messageResponse: undefined,
  message: '',
  groupId: 0,
  isPing: false,
  messageChat: undefined,
  group_id: 0
};

const messageReducer = (
  state = initialState,
  action: AnyAction
): State => {

  switch (action.type) {
    case SET_MESSAGE_FIELDS:
      return {
        ...state,
        [action.field]: action.value,
      } as State;

    default:
      return state as State;
  }
};

export default messageReducer;
