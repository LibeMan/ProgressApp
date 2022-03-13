import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import HSGoalCard from './HSGoalCard';

const Highscores = () => {

    const cards = useSelector(({cards}) => {
        return cards
    })


    return (
        <div>
            <h2>Highscores</h2>
            <p>Oldest plants in the PlantApp history.</p>

            {cards.map((goal, index) => {
                return(
                    <div>
                        <hr></hr>
                        <p>Rank. {  index+1 }</p>
                        <HSGoalCard key={goal.id} goal={goal} />
                    </div>
                )
            })}

                
            
        </div>
    )
  }
  
  export default Highscores