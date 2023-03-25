import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import securityReducer from "./securityReducers";

const rootReducer = combineReducers({
  message: messageReducer,
  security: securityReducer,
});

export default rootReducer;
