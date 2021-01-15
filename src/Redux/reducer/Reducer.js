const initState={
    user:[{id:'1',name:'samim'}],
}
const Reducer=(state=initState,action)=>{
        switch(action.type){
            case 'ADD':
                return{user:[action.payload,...state.user]}
            
            case 'DELETE':
                
                const filterUser=state.user.filter(user=>user.id!==action.payload) 
                
                return{ user:filterUser}   
            default:
                return state;
        };
        
}
export default Reducer;