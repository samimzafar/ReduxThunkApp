import * as ActionTypes from "../Action/ActionTypes"

const initState = {

    cartUser: [],
    SelectedBreedName: ""

}
const BreedReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SET_SELECT_BREED_NAME:
            return { ...state, SelectedBreedName: action.NewBreedName }

        case ActionTypes.FETCH_IMAGE:
            return { ...state, Image: action.image }

        case ActionTypes.FETCH_NAME:
            return { ...state, Name: action.name }

        case ActionTypes.FETCH_ERROR:
            return { ...state, error: action.error }

        case ActionTypes.ADD_TO_CART:
            return { ...state, cartUser: [...action.cartUser] }

        case ActionTypes.DEL_FROM_CART:

            const newItem = state.cartUser.filter(us => us !== action.deleteItem)

            return { ...state, cartUser: newItem }

        default:
            return state;
    }
}
export default BreedReducer