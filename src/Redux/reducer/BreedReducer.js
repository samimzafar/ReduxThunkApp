const initState={
    
    cartUser:[]

}
    const BreedReducer=(state=initState,action)=>{
    switch(action.type){
        
        case 'API':

        return{...state, Pic:action.message}

        
        case 'name':
        
        return{...state,Name:action.breedName}

        case 'To_Cart':
    
        return{...state, cartUser:[...action.payload]}

        case 'DEL':
        
        const newItem=state.cartUser.filter(us=>us!==action.payload)
        
        return{...state,  cartUser : newItem}

        default:
        return state;
    }
}
export default BreedReducer