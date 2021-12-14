import React from 'react';

const GoalCard = ({goal}) => {
    return (
        <div>
            name:{goal.name}, count:{goal.count}
            <button>Reset</button>
            <button>Delete</button>
        </div>
    )
  }
  
  export default GoalCard