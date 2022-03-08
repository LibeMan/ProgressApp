import React from 'react';
import { deleteCard } from '../reducers/cardReducer';
import { useDispatch } from 'react-redux';
import Stopwatch from './Stopwatch';

const GoalCard = ({goal}) => {

    const dispatch = useDispatch()

    //Creating dates
    const tdate = goal.date

    //Delete Goalcard
    const delCard = (id) => {
        console.log("Toimii tähän: ", id)
        dispatch(deleteCard(id))
    }
    return (
        <div className='card'>
            <h1>{goal.name}</h1>
            <hr></hr>
            <Stopwatch goalTime={tdate}/>
            <button onClick={()=>delCard(goal.id)}>Delete</button>
        </div>
    )
  }
  
  export default GoalCard