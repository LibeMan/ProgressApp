import cardService from '../services/card'

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CARD':
      return state.concat(action.data)
    case 'INIT_CARDS':
      return action.data
    case "DELETE":
      return refreshPage()
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