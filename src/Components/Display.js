import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Display() {
    
    
    const { allUser,cartUser} = useSelector(state=>state.api)
    const dispatch = useDispatch();
    const {breedName,message} = allUser
    console.log('All User = ',allUser)
    console.log('cart User = ',cartUser)
    return (
        <div> 
            {message?message.map((val,i)=>(
                <div key={i}>
                <h3>{breedName}</h3>
                <button onClick={()=>{dispatch({type:'Add_To_Cart',payload:{i,val,breedName}})}}>Add to cart</button>   
                <img src={val} width="20%" height="50px"/>
                </div>
            )):''}
        </div>
    )
}
