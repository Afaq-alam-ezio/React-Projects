import React, { useEffect, useRef, useState } from 'react'
import './Stopwatch.css';

function Stopwatch() {

    let [isRunning, setIsRunning] = useState(false);
    let [elapsedTime, setElapsedTime] = useState(0);
    let startTimeRef = useRef(0);
    let intervalIdRef = useRef(0);

    useEffect(()=>{

        if(isRunning){

            intervalIdRef.current = setInterval(()=>{

                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return() => {

            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    let start = () => {

        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }
    
    let stop = () => {
        
        setIsRunning(false);
    }
    
    let reset = () => {
        
        setIsRunning(false)
        setElapsedTime(0)
        startTimeRef.current = 0;
        clearInterval(intervalIdRef.current);
    }
    
    let padTime = (time) => {


        let hour = Math.floor(time / (1000 * 60 * 60));
        let minute = Math.floor((time / (1000 * 60)) % 60); 
        let second = Math.floor((time / 1000) % 60);
        let milliSecond = Math.floor(time % (1000) / 10);


        hour = String(hour).padStart(2, "0")
        minute = String(minute).padStart(2, "0")
        second = String(second).padStart(2, "0")
        milliSecond = String(milliSecond).padStart(2, "0")

        return `${hour}:${minute}:${second}:${milliSecond}`
    }

  return (
    <>

        <div className="stopwatch">
            <div className="display">{padTime(elapsedTime)}</div>

            <div className="controls">
                <button onClick={start} id = "start">Start</button>
                <button onClick={stop} id = "stop">Stop</button>
                <button onClick={reset} id = "reset">Reset</button>
            </div>
        </div>
    
    </>
  )
}

export default Stopwatch