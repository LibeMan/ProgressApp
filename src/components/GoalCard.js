import React from 'react';

const GoalCard = ({goal}) => {
    return (
        <div>
            name:{goal.name}, count:{goal.count}
        </div>
    )
  }
  
  export default GoalCard