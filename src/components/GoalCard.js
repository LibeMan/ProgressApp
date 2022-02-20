import React from 'react';
import { deleteCard } from '../reducers/cardReducer';
import { useDispatch } from 'react-redux';
import Timer from './Timer';
import Stopwatch from './Stopwatch';

const GoalCard = ({goal}) => {

    const dispatch = useDispatch()

    //Counter
    function DifferenceInDays(firstDate, secondDate) { 
        const fdate = new Date().getTime()

        const dif = secondDate - fdate

        
        //Seconds
        const secsFrom = dif / 1000
        const secsBetween = Math.abs(secsFrom)
        //minutes
        const minutesFrom = secsBetween / 60
        const minsBetween = Math.abs(minutesFrom)
        //Hours
        const hoursFrom = minsBetween / 60
        const hoursBetween = Math.abs(hoursFrom)
        //Days
        const daysBetween = Math.round((fdate-firstDate)/(1000*60*60*24)); 
        console.log("Output: ",daysBetween + "Days " + hoursBetween + "Hours " + minsBetween + "mins " + secsBetween + "secs")
        console.log("Hej: ",secsBetween, minsBetween, hoursBetween, daysBetween)

        //Calculate separate d,h,m,s
        const days = secsBetween / 86400
        const avrundDays = Math.floor(days)
        const timeLeft = days - avrundDays
            //hours
        const secsLeftDay = timeLeft * 86400
        const hoursLeft = secsLeftDay / 3600
        const avrundHours = Math.floor(hoursLeft)

            //minutes
        const secsLeftHours = (hoursLeft - avrundHours) * 3600
        const minsLeft = secsLeftHours / 60
        const minFloor = Math.floor(minsLeft)
            //seconds
        const secsLeftMin = (minsLeft - minFloor) * 60
        const secsFloor= Math.floor(secsLeftMin)

        console.log("Trying out: ", avrundHours, secsLeftHours, secsLeftMin)
        console.log("Here is avrundad Days: ", avrundDays, avrundHours, minFloor, secsFloor)
    } 
    
    //Trying dates
    
    const sdate = new Date('01/09/2022').getTime()
    const tdate = goal.date
    console.log("Robert: ",tdate)

    //Delete Goalcard
    const delCard = (id) => {
        console.log("Toimii tähän: ", id)
        dispatch(deleteCard(id))
    }
    return (
        <div>
            name:{goal.name}, count: <Timer />, date: {goal.date}
            <button onClick={()=> DifferenceInDays(sdate, tdate)}>Calculate</button>
            <button onClick={()=>delCard(goal.id)}>Delete</button>
            <Stopwatch goalTime={tdate}/>
        </div>
    )
  }
  
  export default GoalCard