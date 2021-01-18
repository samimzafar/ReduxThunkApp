import axios from "axios"
const apiActions=(breedName)=>{
    return async (dispatch)=>{
        try {        
            const res = await axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)
    
            const {message} = res.data;
            dispatch({type:'API',payload:{breedName,message}})
            // const res =await fetch(`https://dog.ceo/api/breed/${breedName}/images`)
            // console.log(`Fetch ${res}`)            
    } 
        catch (error) {
         console.log('error',error)   
        }
    }
}
export default apiActions