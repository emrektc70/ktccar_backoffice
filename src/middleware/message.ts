import { POST_MESSAGES, changeMessageFields } from "../actions/message";
import httpPostMessages from "../api/message/httpPostMessages";

const messageMiddleware =
  (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {

      case POST_MESSAGES: {
        const { message, isPin, groupId } = store.getState().message
        const res = await httpPostMessages({ message, isPin, groupId })
        store.dispatch(changeMessageFields('message', res.message))
        store.dispatch(changeMessageFields('groupId', res.group.id))
        store.dispatch(changeMessageFields('isPin', res.isPin))
        console.log(res.message, 'test message ')
        break
      }
      default:
        next(action);
    }
  };

export default messageMiddleware;