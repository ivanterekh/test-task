import { combineReducers } from "redux";
import texts from "./texts";
import counter from "./counter";

export default combineReducers({ texts, counter });