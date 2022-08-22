// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { composeWithDevTools } from "redux-devtools-extension"
// import alertReducer from './Reducers/alertReducers';
// import thunk from 'redux-thunk';

// const combinedReducer = combineReducers({
//     alertReducer
// })

// const store = createStore(combinedReducer,composeWithDevTools(applyMiddleware(thunk)));
// export default store;


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