
import { configureStore} from '@reduxjs/toolkit'
import authReducer from "./slices/auth.js";
import messageReducer from "./slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;