import { Message } from "./message";

export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

interface GetMessageAction {
  type: typeof GET_MESSAGES;
  value: Message[];
}

interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  value: Message;
}

export type MessageActionType = GetMessageAction | AddMessageAction;
