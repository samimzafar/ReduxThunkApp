import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import apiReducer from "../reducer/apiReducer";
const rootReducers=combineReducers({

    api:apiReducer
})
const store =createStore(rootReducers,applyMiddleware(thunkMiddleware))
export default store; 