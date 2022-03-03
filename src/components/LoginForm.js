import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import loginService from '../services/login'
import { setLogin } from '../reducers/loginReducer'
import cardService from '../services/card'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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

  //User
  const userJ = useSelector(({user}) => {
    console.log("HEj token här:", user)
      return user
  })

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

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogout}>Log out</button>
      {user === null ?
          <p>Not logged-in</p> :
          <div>
            <p>{user.name} logged-in</p>
          </div>
        }
      <p>{errorMessage}</p>
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
      <br/>
    </div>
  )
}

export default LoginForm