import React, { useState, useEffect, useRef } from 'react'

const Clock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(timer)
    }, [])

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        hours = hours ? hours : 12; // convert 0 to 12
        const formattedHours = hours.toString().padStart(2, "0");

        return `${formattedHours}:${minutes} ${ampm}`;
    };


    return (
        <h1 className="relative right-[35%] p-2">{formatTime(time)}</h1>
    )
}

export default Clock