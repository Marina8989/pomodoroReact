import React, {useState} from 'react';
import {FaAngleDown,  FaAngleUp} from "react-icons/fa";

const Session = () => {
    const [count, setCount] = useState(25);
    const clickDown = () => {
        if(count <= 0) {
          setCount(0)
        }else {
            setCount(count - 1)
        }
    }
    const clickUp = () => {
        setCount(count + 1);
    }
    return (
       <> 
        <div className="session-main">
            <h2>Session length</h2>
            <div className="btn-arrow">
                <button type="btn" onClick={clickDown}><FaAngleDown /></button>
                 <h3>{count}</h3>
                <button type="btn" onClick={clickUp}><FaAngleUp /></button> 
            </div>
        </div>
        <div className="session-time">
             <h2>Session Time</h2>
             <h4 className="timer">{count < 10 ? `0${count}` : `${count}:00`}</h4>
        </div>
      </>  
    )
}

export default Session