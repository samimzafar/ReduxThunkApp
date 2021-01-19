import axios from "axios"
import * as ActionTypes from "./ActionTypes"

export function SetSelectedBreedName(NewBreedName){
    return{
        type:ActionTypes.SET_SELECT_BREED_NAME,
        NewBreedName
    }

}

export function delFromCart(deleteItem) {
    return {
        type: ActionTypes.DEL_FROM_CART,
        deleteItem
    }
}
export function addToCart(cartUser) {
    return {
        type: ActionTypes.ADD_TO_CART,
        cartUser
    }
}


export function fetchBreedImage(image) {
    return {
        type: ActionTypes.FETCH_IMAGE,
        image
    }
}


export function fetchBreedName(name) {
    return {
        type: ActionTypes.FETCH_NAME,
        name
    }
}


export function fetchBreedError(error) {
    return {
        type: ActionTypes.FETCH_ERROR,
        error
    }
}

export function FetchBreedData(breedName) {
    return function (dispatch) {
        axios
            .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then((res) => {
                dispatch(fetchBreedImage(res.data.message))
                dispatch(fetchBreedName(breedName))
            })
            .catch((err) => {
                dispatch(fetchBreedError(err))
            })

    }
}