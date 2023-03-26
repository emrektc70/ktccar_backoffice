import { combineReducers } from "redux";
import authenticationReducur from "./authentificationReducers";
import messageReducer from "./messageReducer";
import securityReducer from "./securityReducers";

const rootReducer = combineReducers({
  message: messageReducer,
  security: securityReducer,
  authentication: authenticationReducur,
});

export default rootReducer;
