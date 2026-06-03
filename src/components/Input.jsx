import { useEffect } from "react"

const Input = ({ setInput }) => {

    const handleChange = (e) => {
        const query = e.target.value.trim().toLowerCase()
        setInput(query)
    }

    return (
        <>
            {/* Search-Input on grid-row-2 */}
            <div className="h-fit border-x-8 py-2 px-20">
                < input
                    className="h-10 w-full px-10 row-start-2 row-span-1 border-2 rounded bg-input text-input"
                    placeholder="Search by Name or Email"
                    type="text"
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default Input