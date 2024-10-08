import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, createLogger()];

const store = createStore(
  reducers,
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

export default store;
