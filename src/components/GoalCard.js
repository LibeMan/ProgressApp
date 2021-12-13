import React from 'react';

function GoalCard({goal}) {
    return (
        <div>
            name:{goal.name}, count:{goal.count}
        </div>
    )
  }
  
  export default GoalCard