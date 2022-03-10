import cardService from '../services/card'

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CARD':
      return state.concat(action.data)
    case 'INIT_CARDS':
      return action.data
    case "DELETE":
      return refreshPage()
    case 'NOTE':
      const targetNote = action.id
      const cardToComment = state.find(n => n.id === targetNote)
      const changedCardNote = { 
          ...cardToComment, 
          notes: cardToComment.notes.concat(action.note)
      }
      return state.map(card =>
          card.id !== targetNote ? card : changedCardNote 
      )
    default:
      return state
  }
}

//Refresh page
function refreshPage(){
  window.location.reload()
}

export const createCard = (newObject) => {
  return async dispatch => {
    const newCard = await cardService.create(newObject)
    dispatch({
      type: 'NEW_CARD',
      data: newCard,
    })
  }
}
//Delete card
export const deleteCard = (id) => {
  return async dispatch => {
    await cardService
    .del(id)
    dispatch({
      type:'DELETE'
    })
  }
  
}

//Set notes
export const setCardNote = (id, newObject) => {
  return async dispatch => {
    const newNote = await cardService.update(id, newObject)
    dispatch({
      type: 'NOTE',
      id: id,
      data: newNote
    })
  }
}

export const initializeCards = () => {
    return async dispatch => {
      const cards = await cardService.getAll()
      console.log(cards)
      dispatch({
        type: 'INIT_CARDS',
        data: cards,
      })
    }
  }

  export default cardReducer