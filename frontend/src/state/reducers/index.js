import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import courses from "./course";


export default combineReducers({
  auth,
  message,
  courses
});