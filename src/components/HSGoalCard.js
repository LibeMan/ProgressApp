import React from 'react';
import { deleteCard, setCardNote } from '../reducers/cardReducer';
import { useDispatch, useSelector } from 'react-redux';
import Stopwatch from './Stopwatch';
import { useState } from 'react';
import { setSelectedCard } from '../reducers/selectCardReducer';

const HSGoalCard = ({goal}) => {

    const dispatch = useDispatch()

    const [newNote, setNewNote] = useState('')

    //Start date
    const tdate = goal.date
    const newdate = new Date().getTime()
    const dif = tdate - newdate
    const secsFrom = dif / 1000
    const secsBetween = Math.abs(secsFrom)
    const days = secsBetween / 86400
    //Days since plant seeded to now
    const avrundDays = Math.floor(days)




    const testArray = goal.notes
    console.log("Testarray: ",testArray)

    return (
        <div className='card'>
            <h1>{goal.name}</h1>
            <p>Owner: {goal.owner}</p>
            <hr></hr>
            <h2>Time: {avrundDays} days</h2>
            
            <h3>Updates:</h3>
            {goal.notes.map((note) => (
                <p>{note}</p>
            ))}
        </div>
    )
  }
  
  export default HSGoalCard