import { GET_EVENT, changeEventFields } from "../actions/event";
import httpGetEvent from "../api/event/httpGetEvent";

const eventMiddleware = (store: any) => (next: any) => async (action: any) => {
  switch (action.type) {
    case GET_EVENT: {
      const res = await httpGetEvent();
      store.dispatch(changeEventFields("events", res));
      break;
    }
    default:
      next(action);
  }
};

export default eventMiddleware;
