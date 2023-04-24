import { combineReducers } from "redux";
import authenticationReducer from "./authentificationReducers";
import messageReducer from "./messageReducer";
import securityReducer from "./securityReducers";
import registerReducer from "./registerReducers";

const rootReducer = combineReducers({
  message: messageReducer,
  security: securityReducer,
  authentication: authenticationReducer,
  register: registerReducer,
});

export default rootReducer;
