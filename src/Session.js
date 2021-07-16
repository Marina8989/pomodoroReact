import React, {useState, useEffect} from 'react';
import {FaAngleDown,  FaAngleUp, FaPlay, FaPause, FaHistory} from "react-icons/fa";

const Session = () => {
    const [count, setCount] = useState(25);
    const [seconds, setSeconds] = useState(59);

    const clickDown = () => {
        if(count <= 0) {
          setCount(0);
        }else {
            setCount(count - 1);
        }
    }
    const clickUp = () => {
        setCount(count + 1);
    }
    const startOver = () => {
        setCount(25);
        setSeconds(59);
    }
    const startCountDown = () => {
    }

    useEffect(() => {
       const interval = setInterval(() => {
         console.log('This will run every second');
         if(seconds == 0) {
           setSeconds(59);
           setCount(count - 1);
         }else{
           setSeconds(seconds - 1);
         }
         
       }, 1000);
       return () => clearInterval(interval);
       }, [seconds])
    
    return (
       <> 
        <div className="session-main">
            <h2>Session length</h2>
            <div className="btn-arrow">
                <button type="button" onClick={clickDown}><FaAngleDown /></button>
                 <h3>{count}</h3>
                <button type="button" onClick={clickUp}><FaAngleUp /></button> 
            </div>
        </div>
        <div className="session-time">
             <h2>Session Time</h2>
             <h4 className="timer">{count < 10 ? `0${count}:0${seconds}` : `${count}:${seconds}`}</h4>
             <button type="button" onClick={startCountDown}><FaPlay /></button>
             <button type="button"><FaPause /></button>
             <button type="button" onClick={startOver}><FaHistory /></button>
        </div>
      </>  
    )
}

export default Session