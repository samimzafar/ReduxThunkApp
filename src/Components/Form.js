import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
function Form() {
 
  const [DogBreed, setDogBreed] = useState('')
  const [DogImage, setDogImage] = useState('')
  
  const selectBreed= async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.get(`https://dog.ceo/api/breed/${DogBreed}/images`);
      setDogImage(res.data);
      
    } 
    catch (error) {
      console.log(error);
    }
}
  return (
    <div>
      <form onSubmit={selectBreed}>
            <select onChange={(e)=>setDogBreed(e.target.value)}>
              <option>Select Dog</option>
              <option value='basenji'>basenji</option>
              <option value='bluetick'>bluetick</option>
              <option value='cairn'>cairn</option>
              <option value='chow'>chow</option>
              <option value='dingo'>dingo</option>
              <option value='doberman'>doberman</option>
              <option value='frise'>frise</option>
            </select>
            <input type="submit" value="Fetch" />
      </form>
    </div>
  )
}
export default Form