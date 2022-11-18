import { combineReducers } from "redux";
import qtyReducer from "./qtyReducer";

//ye use kiya gaya hai to export all the reducer(who do the work given by the action)
const reducer = combineReducers({
    qty: qtyReducer
})

export default reducer