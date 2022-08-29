import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import announcement from './reducers/Announcement';
import courses from './reducers/Courses';
import profile from './reducers/Profile';
import newCourse from './reducers/CreateCourse';


const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  announcement,
  courses,
  profile,
  newCourse
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
