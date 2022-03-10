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
import MyPlants from './components/MyPlants'
import Chat from './components/Chat'
import messageService from './services/message'
import { setMessages } from './reducers/messageReducer'


const App = () => {

  const [userName, setUserName] = useState("")

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeCards())
      dispatch(setMessages()) 
  },[dispatch]) 

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlantappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      // setUser(user)
      dispatch(setInfo(user))
      cardService.setToken(user.token)
    }
  },[dispatch])


  //Getting User from store
  const userInfo = useSelector(({userInfo}) => {
      return userInfo
  })
  

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
          <Route path="/chat" component={Chat}>
              <Chat />
          </Route>
          <Route path="/myplants" component={MyPlants}>
            {userInfo === null ?
            <div>
              <p>To see your plants, please log in!</p>
              <LoginForm/>
            </div> 
            :
            <div>
              <MyPlants />
            </div>
            }
          </Route>
          
        </Switch>       
      </Router>
      {userInfo === null ?
          <div>
            
          </div>
          :
          <div>
            <Logout user={userInfo.name}/>
          </div>
          }
      
    
    </div>
    
  )
}

export default App;
