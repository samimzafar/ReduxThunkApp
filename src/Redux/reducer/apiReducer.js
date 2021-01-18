const initState={
    allUser:[],
    cartUser:[]

}
    const apiReducer=(state=initState,action)=>{
    switch(action.type){
        
        case 'API':

        return{...state, allUser:action.payload}
        
        case 'To_Cart':

        const check=state.cartUser.find(us=>us.breedName===action.payload.breedName)
        
        if(!check){
            return{...state, cartUser:[...state.cartUser,action.payload]}
        
        }
        else{
            return state
        }

        case 'DEL':
        
        const newItem=state.cartUser.filter(us=>us.message!==action.payload)
        
        return{...state,  cartUser : newItem}

        

        default:
        return state;
    }
}
export default apiReducer