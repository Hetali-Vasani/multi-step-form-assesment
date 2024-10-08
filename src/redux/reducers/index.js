import { combineReducers } from "redux";
import { formReducer } from "./form.reducer";

const reducers = combineReducers({
  mutiStepFrom: formReducer,
});

export default reducers;
