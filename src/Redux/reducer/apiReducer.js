const initState={
    allUser:[],
    cartUser:[]


}
const apiReducer=(state=initState,action)=>{
    switch(action.type){
        case 'API':
            // return{...state,allUser:action.payload}
            return{...state, allUser:action.payload}
        case 'Add_To_Cart':
            const check=state.cartUser.find(dog=>dog.breedName===action.payload.breedName)
            if(check){
                return state
            }
            else{
                            return{...state,cartUser:[...state.cartUser,action.payload]}
            }
            // return{...state, cartUser:[...state.cartUser,action.payload]}
        case 'Delelte_From_Cart':
                
            
        default:
        return state;
    }
}

export default apiReducer