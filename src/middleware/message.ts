import { POST_MESSAGES } from "../actions/message";
import httpPostMessages from "../api/message/httpPostMessages";

const messageMiddleware =
  (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {

      case POST_MESSAGES: {

        const message = await httpPostMessages()
        console.log(message)
        break
      }

      default:
        next(action);
    }
  };

export default messageMiddleware;