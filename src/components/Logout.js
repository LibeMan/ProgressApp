import React from 'react'


const LoginForm = ({user}) => {

    //Handle log-out
    const handleLogout = async (event) => {
        event.preventDefault()
        //dispatch(setInfo(null))
        window.localStorage.clear()
        window.location.reload();
    }

    return(
        <div className='logout'>
            <p>{user} logged-in</p>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}


export default LoginForm