import { combineReducers } from "redux";
import tourRedcuer from "./tourReducer";

export default combineReducers({
  tours: tourRedcuer,
});
