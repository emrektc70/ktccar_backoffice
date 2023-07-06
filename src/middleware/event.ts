import { GET_EVENT, changeEventFields } from "../actions/event";
import httpGetEvent from "../api/event/httpGetEvent";

const eventMiddleware = (store: any) => (next: any) => async (action: any) => {
  switch (action.type) {
    case GET_EVENT: {
      console.log("middelwa re");
      const res = await httpGetEvent();
      console.log(res);
      store.dispatch(changeEventFields("event", res));
      break;
    }
  }
};

export default eventMiddleware;
