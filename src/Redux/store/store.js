import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import BreedReducer from "../reducer/BreedReducer";
const rootReducers=combineReducers({

    Breed:BreedReducer
})
const store =createStore(rootReducers,applyMiddleware(thunkMiddleware))
export default store; 