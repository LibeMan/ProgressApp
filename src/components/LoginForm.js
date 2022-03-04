import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import loginService from '../services/login'
import { setLogin } from '../reducers/loginReducer'
import cardService from '../services/card'
import { createUser } from '../reducers/userReducer'
import userService from '../services/user'
import UserCards from './UserCards'
import { setInfo } from '../reducers/userReducer'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newName, setName] = useState('')
  const [newpasswd, setNewPasswd] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loginVisible, setLoginVisible] = useState(false)
  const [createVisible, setLoginVisible2] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlantappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      // setUser(user)
      dispatch(setLogin(user))
      cardService.setToken(user.token)
      console.log("User: ", loggedUserJSON)
    }
  },[dispatch])


  //Handle login
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      cardService.setToken(user.token)
      //local storage
      window.localStorage.setItem(
        'loggedPlantappUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')
      console.log("Kokeilen user dataa: ", user)
      dispatch(setInfo(user))
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  //Handle log-out
  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    window.location.reload();
  }

  //Handle register
  const handleRegister = async (event) => {
    event.preventDefault()
    const username = newUsername
    const name = newName
    const password = newpasswd
    try {
      const user = await userService.createNew({
        username, name, password,
      })
      console.log("Registered ", user)

      cardService.setToken(user.token)
      //local storage
      window.localStorage.setItem(
        'loggedPlantappUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')
      
    } catch (exception) {
      setErrorMessage('Something went wrong!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  }

  //Not-logged-in window
  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }

    const hideWhenVisible2 = { display: createVisible ? 'none' : '' }
    const showWhenVisible2 = { display: createVisible ? '' : 'none' }

    return(
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <form onSubmit={handleLogin}>
            <div>
              username
                <input
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div>
              password
                <input
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button type="submit">login</button>
          </form>
          
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>



        <div style={hideWhenVisible2}>
          <button onClick={() => setLoginVisible2(true)}>Create account</button>
        </div>
        <div style={showWhenVisible2}>
          <form onSubmit={handleRegister}>
        
            <div>
              username
                <input
                type="text"
                value={newUsername}
                name="Username"
                onChange={({ target }) => setNewUsername(target.value)}
              />
            </div>
            <div>
              name
                <input
                type="text"
                value={newName}
                name="Name"
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div>
              password
                <input
                type="password"
                value={newpasswd}
                name="Passwd"
                onChange={({ target }) => setNewPasswd(target.value)}
              />
            </div>
            <button type="submit">Register</button>
          </form>
          
          <button onClick={() => setLoginVisible2(false)}>cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>Login</h2>
      {user === null ?
          loginForm() :
          <div>
            <p>{user.name} logged-in</p>
            <UserCards user={user.cards}/>
            <button onClick={handleLogout}>Log out</button>
          </div>
        }
      <p>{errorMessage}</p>
      
      <br/>
    </div>
  )
}

export default LoginForm