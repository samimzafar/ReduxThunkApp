import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import BreedReducer from "../Reducer/BreedReducer";
const rootReducers=combineReducers({

    Breed:BreedReducer
})
const Store =createStore(rootReducers,applyMiddleware(thunkMiddleware))
export default Store; 