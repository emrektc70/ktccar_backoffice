import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import apiMiddleware from "../middleware/message";
import authenticationMiddleware from "../middleware/authentification";
import registerMiddleware from "../middleware/register";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    apiMiddleware,
    authenticationMiddleware,
    registerMiddleware,
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;

// Infer the Rootstateand AppDispatch types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: Postsstate, comments: CommentsState, users: Usersstate}
export type AppDispatch = typeof store.dispatch;
