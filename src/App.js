import React, {useEffect, useState} from 'react'
import { initializeCards } from './reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
//Components
import GoalCardList from './components/GoalCardList'
import CardForm from './components/CardForm'
import LoginForm from './components/LoginForm'
import About from './components/About'
import Logout from './components/Logout'
import Highscores from './components/Highscores'
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
            <div className='startDiv'>
              <h1>PlantApp</h1>
              <p>With plantapp you can set timer on your newly grown plants and add notes to them while they grow. You can also see other people's plants and chat with other users</p>
            </div>
          
          </Route>
          <Route path="/about" component={About}>
              <About />
          </Route>
          <Route path="/highscores" component={Highscores}>
              <Highscores />
          </Route>
          <Route path="/chat" component={Chat}>
              <Chat />
          </Route>
          <Route path="/myplants" component={MyPlants}>
            {userInfo === null ?
            <div className='startDiv'>
              <p>To see your plants, please log in!</p>
              
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
            <LoginForm/>
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
