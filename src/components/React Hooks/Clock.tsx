import { useEffect, useState } from "react"

const Clock = () => {

    const [time, setTime] = useState<string>(new Date().toLocaleTimeString())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

        return () => clearInterval(timer)
    }, [])


    return (
        <div className='p-2 w-80 border border-foreground rounded-md'>
            <p className='mx-auto h-10 content-center text-4xl font-bold'> Clock </p>
            <p className='mx-auto h-10 content-center text-4xl font-bold'>{time}</p>
        </div>
    )
}

export default Clock