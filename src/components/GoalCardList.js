import GoalCard from './GoalCard'
import { useSelector } from 'react-redux'

const GoalCardList = ({userName}) => {

    const cards = useSelector(({cards}) => {
        return cards
    })

    return (
        <div>
            {cards.map(goal => {
                if (goal.owner === userName){
                    return <GoalCard key={goal.id} goal={goal} />
                }
            }
                
                
            )}
        </div>
    )
  }
  
  export default GoalCardList

  /* all cards rendered
            {cards.map(goal => 
                <GoalCard key={goal.id} goal={goal} />
            )}
  */