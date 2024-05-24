import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import usersReducer from "./slices/users";
import papersReducer from "./slices/papers";
import messageReducer from "./slices/message";
import infosReducer from "./slices/infos";
import schoolsReducer from "./slices/schools";
import messagesReducer from "./slices/messages";

const reducer = {
  auth: authReducer,
  users: usersReducer,
  message: messageReducer,
  papers: papersReducer,
  infos: infosReducer,
  schools: schoolsReducer,
  messages: messagesReducer,
};


const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
export default store;
