import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


const store= legacy_createStore(reducers, {}, applyMiddleware(thunk))

export default store; 