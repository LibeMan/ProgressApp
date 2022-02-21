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
        <div>
            name:{goal.name}
            <button onClick={()=>delCard(goal.id)}>Delete</button>
            <Stopwatch goalTime={tdate}/>
        </div>
    )
  }
  
  export default GoalCard