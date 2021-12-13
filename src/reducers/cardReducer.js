import cardService from '../services/card'

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CARDS':
      return action.data
    default:
      return state
  }
}

export const initializeCards = () => {
    return async dispatch => {
      const cards = await cardService.getAll()
      dispatch({
        type: 'INIT_CARDS',
        data: cards,
      })
    }
  }

  export default cardReducer