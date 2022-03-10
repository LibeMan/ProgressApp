import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createMessage } from '../reducers/messageReducer';
import messageService from '../services/message'

const Chat = () => {

    const dispatch = useDispatch() 

    //User
    const userInfo = useSelector(({userInfo}) => {
        console.log("HEj user här i app:", userInfo)
        return userInfo
    })
    //messages
    const messageA = useSelector(({messages}) => {
        console.log("Messages:", messages)
        return messages
    })

    const [message, setMessage] = useState("")
    const messageArray = ["hej"]

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    //Add message
    const addMessage = async (event) => {
        event.preventDefault()
        const yo = messageArray.concat(message)
        console.log("UROb här: ", userInfo.username)
        messageService.setToken(userInfo.token)
        const content = message
        //const userId = userInfo.id
        const newMessage = {
            content: content,
            username: userInfo.username
        }
        console.log("TEsti: ",newMessage)
        dispatch(createMessage(newMessage))
    }

    return(
        <div>
            <h1 className='chatHeader'>Chat with other users</h1>
            <div className='parentDiv'>
                <p>Yo</p>
                {messageA.map((lol) => {
                    console.log("Loggin:",lol.user)
                    
                    return(
                        <div>
                            <h3>{lol.username}</h3>
                            <p>{lol.content}</p>
                        </div>
                    )
                })}
                    
                    
            </div>
            <form onSubmit= {addMessage} className="addMesForm">
                <input value={message} onChange={handleMessage}/>
                <button type="submit">Send</button>
            </form>
        </div>
        
    )
}

export default Chat;