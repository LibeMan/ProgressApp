import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import cardReducer from './reducers/cardReducer' 
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  cards: cardReducer,
  userInfo: userReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store