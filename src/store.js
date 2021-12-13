import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import cardReducer from './reducers/cardReducer' 
import cardService from './services/card'

const reducer = combineReducers({
  cards: cardReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

cardService.getAll().then(cards =>
  cards.forEach(card => {
    store.dispatch({ type: 'NEW_CARD', data: card })
  })
)

export default store