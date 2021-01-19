import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as BreedActions from '../Redux/Action/BreedActions';
import AddToCart from './AddToCart';
const useStyles = makeStyles({
    formStyle: {

        display: 'flex',
        padding: '20px 0',
        justifyContent: 'center',
        flexDirection: 'column',
        '& form': {
            display: 'flex',
            width: '90%',
        },
        '& label': {
            display: 'flex',
            flex: 4,
            color: '#ff2b2b',
            fontSize: '3rem',
            textAlign: 'center',
            fontWeight: 'bold',
            lineHeight: 0,
            alignItems: 'center',
            justifyContent: 'center',

        },
        '& select': {
            color: 'white',
            padding: '2px 10px',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            borderRadius: '5%',
            backgroundColor: '#581845',
            fontFamily: 'Cursive',
            outline: 'none',
        },
        '& select:hover': {
            backgroundColor: 'white',
            color: '#581845',
            cursor: 'pointer',
            transition: '.8s ease-in-out'
        },
        '& option': {
            color: 'white',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            backgroundColor: '#581845',
        },
        '& input': {
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
        '& input:hover': {
            backgroundColor: '#581845',
            color: 'white',
            cursor: 'pointer',
            transition: '.8s ease-in-out'
        }
    }

})

const breeds = ["African", "Boxer", "Shiba", "Akita", "Chow"];
export default function Submit() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const SelectedBreedName = useSelector(state => state.Breed.SelectedBreedName)


    return (

        <div className={classes.formStyle}>

            <label>Select the Breed of dog&nbsp;&nbsp;:&nbsp;&nbsp;
            <select value={SelectedBreedName} onChange={
                    (e) => {
                    const breed=e.target.value.toLowerCase()
                    dispatch(BreedActions.SetSelectedBreedName(e.target.value));
                    dispatch(BreedActions.FetchBreedData(breed))
                    }}>
                    {breeds.map((breed) => (
                        <option value={breed}>
                            {breed}
                        </option>
                    ))}

                </select>
            </label>

            <AddToCart />

        </div>
    )
}
