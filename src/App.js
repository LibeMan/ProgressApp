import React, {useEffect, useState} from 'react'
import { initializeCards } from './reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
//Components
import GoalCardList from './components/GoalCardList'
import CardForm from './components/CardForm'
import LoginForm from './components/LoginForm'
//Services
import loginService from './services/login'
import cardService from './services/card'
//Reducers
import setLogin from './reducers/loginReducer'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeCards()) 
  },[dispatch]) 

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginVisible, setLoginVisible] = useState(false)

  //User
  const user = useSelector(({user}) => {
    console.log("HEj token här:", user)
      return user
  })

  //Handle login
  const handleLogin = async (event) => {
    event.preventDefault()
    
    try
    {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      cardService.setToken(user.token)
      dispatch(setLogin(user))
      // setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
    }
    
  }

  //loginform
  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }
    return(
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>PlantApp</h1>
      {user === null ?
          loginForm() :
          <div>
            <p>{user.name} logged-in</p>
          </div>
        }
      <GoalCardList/>
      <CardForm/>
    </div>
    
  )
}

export default App;
