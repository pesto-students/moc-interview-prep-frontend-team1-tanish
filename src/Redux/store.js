import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import alertReducer from './Reducers/alertReducers';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    alertReducer
})

const store = createStore(combinedReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;