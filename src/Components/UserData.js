import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import apiActions from '../Redux/actions/apiActions'

export default function UserData() {


        const users = useSelector(state => state.users)        
        const dispatch = useDispatch();
        
        const [Input, setInput] = useState('african')
         
        const handleSubmit=(e)=>{
            e.preventDefault()
            dispatch(apiActions(Input))

        }
        

    return (
        <div>
            {users.user.map(val=>{
                return(
                    <div key={val.id}>
                    <h1>{val.name}</h1>
                    <button 
                    onClick={()=>dispatch(
                    {type:'DELETE',payload:val.id})}>Delete</button>
                    </div>
                )
            })}

                 <form onSubmit={handleSubmit}>
                    <label>
                    Pick your favorite Breed of dog:
                    <select value={Input} onChange={(e)=>{setInput(e.target.value)}}>
                        <option value="african">african</option>
                        <option value="boxer">boxer</option>
                        <option value="shiba">shiba</option>
                        <option value="akita">akita</option>
                        <option value="chow">chow</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                 </form>


        </div>
    )
}
