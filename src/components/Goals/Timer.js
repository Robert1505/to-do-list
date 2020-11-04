
import React, {useState} from 'react'

export default function Timer() {
    

    const [totalSeconds, setTotalSeconds] = useState(86400);
    const [hours, setHours] = useState((totalSeconds/3600) % 24);
    const [minutes, setMinutes] = useState((totalSeconds / 60) % 60);
    const [seconds, setSeconds] = useState(totalSeconds % 60);

    setTimeout(() => {
        setTotalSeconds(totalSeconds - 1);
        setSeconds(totalSeconds % 60);
        setMinutes(Math.floor((totalSeconds / 60)) % 60);
        setHours(Math.floor((totalSeconds/3600)) % 24);
    }, 1000);



    return (
        <div className = "container">
            <h1 id = "headline">TIME LEFT TO BE A GOD:</h1>
            <div id = "countdown">
                <ul>
                    <li>
                        <span id = "hours"></span>
                        {hours}
                    </li>
                    <li>
                        <span id = "minutes"></span>
                        {minutes}
                    </li>
                    <li>
                        <span id = "seconds"></span>
                        {seconds}
                    </li>
                </ul>
            </div>
        </div>
    )
}
