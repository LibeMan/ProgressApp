import React, { useState, useEffect } from "react";


const Stopwatch = ({goalTime}) => {
    

    //Kokeilen tässä

    const fdate = new Date().getTime()
    const dif = goalTime - fdate
        
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
    //const daysBetween = Math.round((fdate-firstDate)/(1000*60*60*24)); 

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

    console.log("Stopwatch: ", avrundHours, secsLeftHours, secsLeftMin)
    console.log("Here are results: ", avrundDays, avrundHours, minFloor, secsFloor)
    //Next lets get those numbers into a usestate that updates   
    
    
    const [time, setTime] = useState(dif);
    const [dClock, setD] = useState(0);
    const [hClock, setH] = useState(0);
    const [mClock, setM] = useState(0);
    const [sClock, setS] = useState(0);

    const [running, setRunning] = useState(true);

    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1000);
        }, 1000);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="stopwatch">
        <div className="numbers">
          <div>{("Days: " + avrundDays)}</div>
          <div>{("Hours: " + avrundHours)}</div>
          <div>{("Minutes: " + minFloor)}</div>
          <div>{("Seconds: " + secsFloor)}</div>
          
        </div>
        <div className="buttons">
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => setTime(dif)}>Reset</button>       
        </div>
      </div>
    );
  };


export default Stopwatch;