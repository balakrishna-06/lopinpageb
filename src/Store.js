import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import { thunk } from "redux-thunk";
import authReducer from "./Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
