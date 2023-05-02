import { POST_REGISTER, changeRegisterFields } from "../actions/register";
import postRegister from "../api/register/postRegister";

const registerMiddleware =
  (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {
      case POST_REGISTER:
        try {
          const { register } = store.getState();
          const data = {
            "firstName": register.firstName,
            "lastName": register.lastName,
            "email": register.emailRegister,
            "phoneNumber": register.phoneNumber,
            "username": register.username,
            "password": register.passwordRegister,
          }

          const res = await postRegister(data);
          store.dispatch(changeRegisterFields("firstName", res.firstName));
          store.dispatch(changeRegisterFields("passwordRegister", res.password));
          store.dispatch(changeRegisterFields("emailRegister", res.email));
          store.dispatch(changeRegisterFields("lastName", res.lastName));
          store.dispatch(changeRegisterFields("phoneNumber", res.phoneNumber));
          store.dispatch(changeRegisterFields("username", res.username));
          return res;
        } catch (error) {
          console.dir(error);
        }
        break;
      default:
        next(action);
    }
  };

export default registerMiddleware;