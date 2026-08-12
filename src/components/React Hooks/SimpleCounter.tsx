import { useState, useEffect, Activity } from "react"
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { changeTitle } from '@/store/TitleSlice';

const SimpleCounter = () => {

    const mount = useSelector((state: RootState) => state.mount)

    return <>
        <Activity mode={mount.value ? "visible" : "hidden"}>
            <OtherComponent />
        </Activity>
    </>
}

export default SimpleCounter

function OtherComponent() {

    const dispatch = useDispatch<AppDispatch>()
    const [count, setCount] = useState(0)

    useEffect(() => {
        dispatch(changeTitle(count))
    }, [count])

    return (
        <div className='p-2 w-60 border border-foreground rounded-md flex flex-col gap-y-2'>
            <p className='mx-auto h-10 w-22 content-center text-4xl font-bold'>{count}</p>
            <div className='mx-auto flex flex-col w-22 gap-y-2'>
                <div className='mx-auto w-full justify-center flex gap-x-2'>
                    <button
                        className='border-2 rounded-md h-10 w-10 font-bold'
                        onClick={() => (count !== 0) ? setCount(prev => prev - 1) : null}>-</button>
                    <button
                        className='border-2 rounded-md h-10 w-10 font-bold'
                        onClick={() => setCount(prev => prev + 1)}>+</button>
                </div>
                <button className='border-2 rounded-md h-10 w-full font-semibold'
                    onClick={() => setCount(0)}>RESET</button>
            </div>
            <p>This is a simple counter with UseState & useEffect Hook. </p>
            <p>It also changes the title of the page when count is {'>='} 5</p>
        </div>
    )
}