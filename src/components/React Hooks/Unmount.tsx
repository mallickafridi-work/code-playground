import { setMount } from '@/store/mountSlice'
import type { RootState, AppDispatch } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'

const Unmount = () => {
    const dispatch = useDispatch<AppDispatch>()
    const mount = useSelector((state: RootState) => state.mount)

    function handleClick() {
        dispatch(setMount(mount.value))
    }

    return (
        <div className='p-2 w-60 border border-foreground rounded-md flex flex-col gap-y-2'>
            <div >
                <button className="border-2 rounded-md h-10 w-full font-semibold"
                    onClick={() => handleClick()}>
                    {mount.text}</button>
            </div>
        </div>
    )
}

export default Unmount