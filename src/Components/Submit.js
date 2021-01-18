import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import apiActions from '../Redux/actions/apiActions'
import AddToCart from './AddToCart';
const useStyles=makeStyles({
    formStyle:{

        display:'flex',
        padding:'20px 0',
        justifyContent:'center',
        flexDirection:'column',
        '& form':{
            display: 'flex',
            width: '90%',
        },
        '& label':{
            display:'flex',
            flex: 4,
            color: '#ff2b2b',
            fontSize: '3rem',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: 0,
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        '& select':{
            color: 'white',
            padding: '2px 10px',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            borderRadius: '5%',
            backgroundColor: '#581845',
            fontFamily: 'Cursive',
            outline: 'none',
        },
        '& select:hover':{
            backgroundColor:'white',
            color:'#581845',
            cursor:'pointer',
            transition:'.8s ease-in-out'
        },
        '& option':{
            color: 'white',
            fontSize: '1.3rem',
            fontWeight:'bold',
            backgroundColor: '#581845',
        },
        '& input':{
            flex: 1,
            display: 'flex',
            padding: '2px 10px',
            color: '#581845',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '5%',
            backgroundColor: 'white',
            justifyContent: 'center',
            fontFamily: 'Cursive',
            outline: 'none',
        },
        '& input:hover':{
            backgroundColor:'#581845',
            color:'white',
            cursor:'pointer',
            transition:'.8s ease-in-out'
        }
    }

})
export default function Submit() {
        const classes=useStyles()
        const dispatch = useDispatch(); 
        const [Input, setInput] = useState('african')
        const handleSubmit=(e)=>{
            e.preventDefault()
            dispatch(apiActions(Input))

        }

    return (

    <div className={classes.formStyle}>
            
        <form onSubmit={handleSubmit} >
            <label>Select the Breed of dog&nbsp;&nbsp;:&nbsp;&nbsp;
            <select value={Input} onChange={(e)=>{setInput(e.target.value)}}>
              <option value="african">african</option>
              <option value="boxer">boxer</option>
              <option value="shiba">shiba</option>
              <option value="akita">akita</option>
              <option value="chow">chow</option>
            </select>
            </label>
            <input type="submit" value="FETCH" />
        </form>
        <AddToCart/>
        
    </div>
    )
}
