import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import cardReducer from './reducers/cardReducer' 
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'
import selectCardReducer from './reducers/selectCardReducer'
import messageReducer from './reducers/messageReducer'

const reducer = combineReducers({
  cards: cardReducer,
  card: selectCardReducer,
  userInfo: userReducer,
  login: loginReducer,
  messages: messageReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store