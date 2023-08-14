import { POST_LOGIN } from "../actions/authentification";
import { changeSecurityFields } from "../actions/security";
import getLogin from "../api/authentification/getLogin";

const authenticationMiddleware =
  (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {
      case POST_LOGIN:
        try {
          const { email, password } = store.getState().authentication;
          const res = await getLogin(email, password);
          sessionStorage.setItem("token", res.access_token);
          store.dispatch(changeSecurityFields("isLog", true));
        } catch (error) {
          console.dir(error);
        }
        break;
      default:
        next(action);
    }
  };

export default authenticationMiddleware;
