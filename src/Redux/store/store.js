import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import apiReducer from "../reducer/apiReducer";
import Reducer from "../reducer/Reducer"; 
const rootReducers=combineReducers({
    users:Reducer,
    api:apiReducer
})
const store =createStore(rootReducers,applyMiddleware(thunkMiddleware))
export default store; 