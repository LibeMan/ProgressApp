import React from 'react';
import { deleteCard } from '../reducers/cardReducer';
import { useDispatch } from 'react-redux';

const GoalCard = ({goal}) => {

    const dispatch = useDispatch()

    //Delete Goalcard
    const delCard = (id) => {
        console.log("Toimii tähän: ", id)
        dispatch(deleteCard(id))
    }
    return (
        <div>
            name:{goal.name}, count:{goal.count}
            <button>Reset</button>
            <button onClick={()=>delCard(goal.id)}>Delete</button>
        </div>
    )
  }
  
  export default GoalCard