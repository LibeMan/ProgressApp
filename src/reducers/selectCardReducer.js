const selectedCard = null

const selectCardReducer = (state = selectedCard, action) => {
    switch (action.type) {
      case 'SET_CARD':
        return action.data
      default:
        return state
    }
  }
  
  export const setSelectedCard = (card) => {
    return {
      type: 'SET_CARD',
      data: card,
    }
  }
  
  export default selectCardReducer