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

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeCards()) 
  },[dispatch]) 

  //User
  const user = useSelector(({user}) => {
    console.log("HEj token här:", user)
      return user
  })

  

  return (
    <div>
      <h1>PlantApp</h1>
      <LoginForm/>
      <GoalCardList/>
      <CardForm/>
    </div>
    
  )
}

export default App;
