import React from 'react';
import { deleteCard, setCardNote } from '../reducers/cardReducer';
import { useDispatch, useSelector } from 'react-redux';
import Stopwatch from './Stopwatch';
import { useState } from 'react';
import { setSelectedCard } from '../reducers/selectCardReducer';

const GoalCard = ({goal}) => {

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


    //Delete Goalcard
    const delCard = (id) => {
        console.log("Toimii tähän: ", id)
        dispatch(deleteCard(id))
    }

    //Add note
    const addNote = async (event) => {
        event.preventDefault()
        const newObject = goal
        const note = "Day "+avrundDays+": "+newNote
        newObject.notes = newObject.notes.concat(note)
        dispatch(setCardNote(goal.id, newObject))
    }
    const handleNote = (event) => {
        setNewNote(event.target.value)
    }

    const testArray = goal.notes
    console.log("Testarray: ",testArray)

    return (
        <div className='card'>
            <h1>{goal.name}</h1>
            <hr></hr>
            <Stopwatch goalTime={tdate}/>
            <form onSubmit= {addNote}>
                <input value={newNote} onChange={handleNote}/>
                <button type="submit">Add note</button>
            </form>
            <h3>Updates:</h3>
            {goal.notes.map((note) => (
                <p>{note}</p>
            ))}

            <button onClick={()=>delCard(goal.id)}>Delete</button>
        </div>
    )
  }
  
  export default GoalCard