import { combineReducers } from "redux";
import authenticationReducer from "./authentificationReducers";
import messageReducer from "./messageReducer";
import securityReducer from "./securityReducers";
import registerReducer from "./registerReducers";
import groupesReducer from "./groupeRedcuers";
import userReducer from "./userReducer";
import eventReducers from "./eventReducers";

const rootReducer = combineReducers({
  message: messageReducer,
  security: securityReducer,
  authentication: authenticationReducer,
  register: registerReducer,
  groupe: groupesReducer,
  user: userReducer,
  event: eventReducers,
});

export default rootReducer;
