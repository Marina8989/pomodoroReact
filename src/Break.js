import React, {useState} from 'react';
import {FaAngleDown,  FaAngleUp} from "react-icons/fa";



const Break = () => {
    const [count, setCount] = useState(5);

    const clickDown = () => {
        if(count <= 1) {
          setCount(1);
        }else {
            setCount(count - 1);
        }
    }

    const clickUp = () => {
        setCount(count + 1);
    }
    return (
        <div className="break-main">
            <h2>Break length</h2>
            <div className="btn-arrow">
                <button type="btn" onClick={clickDown}><FaAngleDown /></button>
                 <h3>{count}</h3>
                <button type="btn" onClick={clickUp}><FaAngleUp /></button> 
            </div>
        </div>
    )
}

export default Break
