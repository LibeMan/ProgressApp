import React from 'react';
import GoalCard from './GoalCard'

const data = [
    {
      id: 1,
      name: 'No Coffee',
      count: 0,
      date: '2019-05-30T17:30:31.098Z',
    },
    {
      id: 2,
      name: 'No Alcohol',
      count: 3,
      date: '2019-05-30T18:39:34.091Z',
    },
    {
      id: 3,
      name: 'No Fap',
      count: 2,
      date: '2019-05-30T19:20:14.298Z',
    }
  ]

function GoalCardList() {
    return (
        <div>
            {data.map(goal => 
                <GoalCard key={goal.id} goal={goal} />
        )}
    </div>
    )
  }
  
  export default GoalCardList