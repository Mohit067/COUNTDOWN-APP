import { useState, useRef, useEffect } from 'react'
import './Countdown.css'

export const Countdown = () => {
    const [target, setTarget] = useState(null);
    const [diff, setDiff] = useState(0);

    const id = useRef(0);

    function handleSubmit() {
        id.current = setInterval(() => {
            setDiff(new Date(target) - new Date());
        }, 1000);
    }

    useEffect(() => {
        if(diff < 0){
            clearInterval(id.current);
            setDiff(0);
        }
    }, [diff])

    const getDays = () => {
        return Math.floor(diff/(1000*60*60*24))
    }
    
    const getHours = () => {
        const hoursInMs = Math.floor(diff%(1000*60*60*24));
        return Math.floor(hoursInMs/(1000*60*60));
    }

    const getMinutes = () => {
        const minutesInMs = Math.floor(diff%(1000*60*60));
        return Math.floor(minutesInMs/(1000*60));
    }

    const getSeconds = () => {
        const getSeconds = Math.floor(diff%(1000*60));
        return Math.floor(getSeconds/(1000));
    }
    return (
        <>
            <div id="container">
                <div id="input">
                <h1>Countdown timer app</h1>
                    <input 
                        type="datetime-local" 
                        id="datetime"
                        onChange={(e) => setTarget(e.target.value)}
                    />
                    <button id="submit" onClick={handleSubmit}>Start</button>
                </div>

                <div id="display">
                    <ul>
                        <li><span id="days">{getDays()}</span>days</li>
                        <li><span id="hours">{getHours()}</span>hours</li>
                        <li><span id="minutes">{getMinutes()}</span>minutes</li>
                        <li><span id="seconds">{getSeconds()}</span>seconds</li>
                    </ul>
                </div>
            </div>
        </>
    )
}