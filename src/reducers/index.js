import topicReducer from "./topic";
import { combineReducers} from "redux";

export const allReducers = combineReducers({
  topicReducer,

})

export default allReducers;