import GoalCard from './GoalCard'
import { useSelector } from 'react-redux'

function GoalCardList() {

    // const dispatch = useDispatch()

    const cards = useSelector(({filter, cards}) => {
        if ( filter === '' ) {
            return cards
          }
        return filter  !== '' 
            ? cards.filter(card => card.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
            : cards
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