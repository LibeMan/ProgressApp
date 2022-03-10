import messageService from '../services/message'

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return state.concat(action.data)
    case 'SET_MESSAGES':
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

export const createMessage = (newObject) => {
  return async dispatch => {
    const newMessage = await messageService.create(newObject)
    dispatch({
      type: 'NEW_MESSAGE',
      data: newMessage,
    })
  }
}
//Delete card
export const deleteMessage = (id) => {
  return async dispatch => {
    await messageService
    .del(id)
    dispatch({
      type:'DELETE'
    })
  }
  
}


export const setMessages = () => {
    return async dispatch => {
      const messages = await messageService.getAll()
      console.log("MessageReducer: ", messages)
      dispatch({
        type: 'SET_MESSAGES',
        data: messages,
      })
    }
}

export default messageReducer