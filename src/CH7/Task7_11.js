// Digital Clock Running Continuously Using Use Effect Hook

import React, { useState } from 'react'
import { useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const secs = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(secs);
    }, []); 

    const irl_time = time.toLocaleTimeString(); 

    return (
        <div>
            <h1>Digital Clock</h1>
            <p>{irl_time}</p>
        </div>
    );
}
export default Clock