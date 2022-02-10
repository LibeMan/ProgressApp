import { useDispatch } from 'react-redux'
import { createCard } from '../reducers/cardReducer'

const CardForm = () => {

  const dispatch = useDispatch()
  const id = () => (100000 * Math.random()).toFixed(0)

  const addCard = async (event) => {
    event.preventDefault()
    const content = event.target.card.value
    const newId = id()
    event.target.card.value = ''
    const newCard = {
      name: content,
      count: 0,
    }
    console.log("Hejhej: ", content, newId)
    
    dispatch(createCard(newCard))
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addCard} >
            <div><input name='card'/></div>
            <button type='submit'>create card</button>
        </form>
    </div>
  )
}

export default CardForm