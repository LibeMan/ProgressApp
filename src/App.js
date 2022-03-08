import React, {useEffect, useState} from 'react'
import { initializeCards } from './reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
//Components
import GoalCardList from './components/GoalCardList'
import CardForm from './components/CardForm'
import LoginForm from './components/LoginForm'
import About from './components/About'
import Logout from './components/Logout'
//Services

import cardService from './services/card'
//Reducers
import { setInfo } from './reducers/userReducer'
import Navbar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

  const [userName, setUserName] = useState("")

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeCards()) 
  },[dispatch]) 

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlantappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      // setUser(user)
      dispatch(setInfo(user))
      cardService.setToken(user.token)
      console.log("User: ", loggedUserJSON)
    }
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
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" >
          <h1>PlantApp</h1>
          </Route>
          <Route path="/about" component={About}>
              <About />
          </Route>
          
          
        </Switch>
        
        {userInfo === null ?
          <LoginForm/> : 
          <div>
            <Logout user={userInfo.name}/>
            <CardForm user={userInfo.name}/>
            <GoalCardList userName={userInfo.name}/>
          </div>
          
        }
        
      </Router>
      
      
      
    </div>
    
  )
}

export default App;
