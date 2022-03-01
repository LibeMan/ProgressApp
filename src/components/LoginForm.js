import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import loginService from '../services/login'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  //Handle login
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      loginService.setToken(user.token)
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

  return (
    <div>
      <h2>Login</h2>
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