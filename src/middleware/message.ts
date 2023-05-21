import { GET_MESSAGE, POST_MESSAGES, changeMessageFields } from "../actions/message";
import httpGetMessage from "../api/message/httpGetMessageId";
import httpPostMessages from "../api/message/httpPostMessages";

const messageMiddleware =
  (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {

      case POST_MESSAGES: {
        const { message, isPin, group_id } = store.getState().message
        const res = await httpPostMessages({ message, isPin, group_id })
        store.dispatch(changeMessageFields('message', res.message))
        // store.dispatch(changeMessageFields('groupId', res.group.id))
        store.dispatch(changeMessageFields('isPin', res.isPin))
        console.log('test message ')
        break
      }

      case GET_MESSAGE: {
        const { group_id } = store.getState().message
        const res = await httpGetMessage(group_id)
        store.dispatch(changeMessageFields('messageChat', res))
        break
      }
      default:
        next(action);
    }
  };

export default messageMiddleware;