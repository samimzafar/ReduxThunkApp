import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
export default function Fetch() {
    
    const dispatch  =    useDispatch()
    const [name, setname] = useState('')    
    const handleForm=(e)=>{
        e.preventDefault()
        dispatch({type:'ADD',payload:{id: uuidv4(),name}})
        setname('')
    }

    

    return (
        <form onSubmit={handleForm}>
                <input type='text' placeholder='name..' value={name}            
                 onChange={(e)=>setname(e.target.value)} required/>
                <button type='submit'>Add user</button>
        </form>
    )
}
