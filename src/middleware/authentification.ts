import { POST_LOGIN } from "../actions/authentification";
import getLogin from "../api/authentification/getLogin";

const authenticationMiddleware =
  (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {
      case POST_LOGIN:
        try {
          const { email, password } = store.getState().authentication;
          console.log(email, password);
          const res = await getLogin(email, password);
          console.log(res);
        } catch (error) {
          console.dir(error);
        }
        break;
      default:
        next(action);
    }
  };

export default authenticationMiddleware;
