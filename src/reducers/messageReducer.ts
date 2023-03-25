import { GET_MESSAGES, ADD_MESSAGE, MessageActionType } from "../types/types";
import { Message } from "../types/message";

const initialState: Message[] = [];

const messageReducer = (
  state = initialState,
  action: MessageActionType
): Message[] => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.value;
    case ADD_MESSAGE:
      return [...state, action.value];
    default:
      return state;
  }
};

export default messageReducer;
