import React from 'react';
import Logout from './Logout'
import CardForm from './CardForm';
import GoalCardList from './GoalCardList';
import { useSelector } from 'react-redux';

const MyPlants= () => {

    //User
    const userInfo = useSelector(({userInfo}) => {
        console.log("HEj user här i app:", userInfo)
        return userInfo
    })
    return(
        <div>
            <h1>My plants</h1>
            <div>
            
            <CardForm user={userInfo.name}/>
            <GoalCardList userName={userInfo.name}/>
          </div>
        </div>
    )
}

export default MyPlants;