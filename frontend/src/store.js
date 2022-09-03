import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";

const initialState = {};
const reducer = combineReducers({
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
