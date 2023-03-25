import { Dispatch } from "redux";
import { getMessagesSuccess } from "../actions/message";

const API_URL = "http://localhost:3110";

export const apiMiddleware =
  ({ dispatch }: { dispatch: Dispatch }) =>
  (next: (action: any) => void) =>
  async (action: any) => {
    if (action.type === "GET_MESSAGES") {
      try {
        const response = await fetch(`${API_URL}/messages`);
        const data = await response.json();
        dispatch(getMessagesSuccess(data));
      } catch (error) {
        console.log(error);
      }
    }
    return next(action);
  };
export default apiMiddleware;
