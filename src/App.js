import React, {useEffect, useState} from 'react'
import { initializeCards } from './reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
//Components
import GoalCardList from './components/GoalCardList'
import CardForm from './components/CardForm'
import LoginForm from './components/LoginForm'
//Services

import cardService from './services/card'
//Reducers
import setLogin from './reducers/loginReducer'

const App = () => {

  const [userName, setUserName] = useState("")

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeCards()) 
  },[dispatch]) 

  //console.log("Store of the state: ",store.getState())

  //User
  const userInfo = useSelector(({userInfo}) => {
    console.log("HEj user här i app:", userInfo)
      return userInfo
  })

  const emptyName = ""
  

  return (
    <div>
      <h1>PlantApp</h1>
      {userInfo === null ?
        emptyName : 
        <div>
          <CardForm user={userInfo.name}/>
          <GoalCardList userName={userInfo.name}/>
        </div>
        
      }
      <LoginForm/>
      
      
    </div>
    
  )
}

export default App;
