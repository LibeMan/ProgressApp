import GoalCard from './GoalCard'
import { useSelector } from 'react-redux'

function GoalCardList() {

    // const dispatch = useDispatch()

    const cards = useSelector(({cards}) => {
        return cards
    })

    return (
        <div>
            {cards.map(goal => 
                <GoalCard key={goal.id} goal={goal} />
        )}
    </div>
    )
  }
  
  export default GoalCardList