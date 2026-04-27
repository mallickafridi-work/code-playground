import { useEffect } from "react"

const Input = ({ input, setInput }) => {

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <>
            {/* Search-Input on grid-row-2 */}
            <div className="h-fit py-2 px-20">
                < input
                    className="w-full row-start-2 row-span-1 border-2 rounded bg-white text-black h-10 px-10"
                    placeholder="Search by Name or Email"
                    type="text"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </>
    )
}

export default Input