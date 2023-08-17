import { GET_USER_ID, changeUserFields } from "../actions/user";
import httpGetUser from "../api/user/httpGetUser";

const userMiddleware = (store: any) => (next: any) => async (action: any) => {
  switch (action.type) {
    case GET_USER_ID:
      try {
        const res = await httpGetUser(action.id);
        /*    if (res === undefined) {
          window.location.href = "/login";
        } */

        store.dispatch(changeUserFields("firstName", res.firstName));
        store.dispatch(changeUserFields("lastName", res.lastName));
        store.dispatch(changeUserFields("userName", res.username));
      } catch (e) {
        console.log(e);
      }
      break;
    default:
      next(action);
  }
};

export default userMiddleware;
