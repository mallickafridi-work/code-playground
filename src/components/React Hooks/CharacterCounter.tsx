import { useState, useRef, useEffect } from "react"


const CharacterCounter = () => {

    const [input, setInput] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [charCount, setCharCount] = useState(0)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [inputRef])

    return (
        <div className='p-2 w-60 border border-foreground rounded-md flex flex-col gap-y-2'>
            <p className='mx-auto h-10 content-center text-4xl font-bold'>{charCount}</p>
            <div className='mx-auto flex flex-col gap-y-2'>
                <div className='mx-auto justify-center flex gap-x-2'>
                    <input
                        className="p-1 w-full bg-white border border-black text-black"
                        ref={inputRef}
                        onChange={(e) => {
                            const newValue = e.target.value
                            setInput(newValue)
                            setCharCount(newValue.length)
                        }}
                        value={input} />
                </div>
            </div>
            <p>This is a character counter with UseState Hook and auto-focus using useRef</p>
        </div>
    )
}

export default CharacterCounter