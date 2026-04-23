import { useEffect } from "react"

const Input = ({ input, setInput, setResults, setError }) => {

    useEffect(() => {
        const API_URL = 'https://dummyjson.com/users'

        async function getData() {
            try {
                const response = await fetch(API_URL)
                const data = await response.json()
                // 👇 Below Function is to filter users from data.users if matches are found

                const filteredUsers = data.users.filter((element) => {
                    const query = input.trim().toLowerCase();
                    // if (query.length < 1) return false
                    const firstName = element.firstName?.toLowerCase() || "";
                    const lastName = element.lastName?.toLowerCase() || "";
                    return firstName.includes(query) || lastName.includes(query);
                });
                setResults(filteredUsers)
            }

            catch (err) {
                console.error(err)
                setError(err.message);
            }
        }
        getData();
    }, [input])

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <>
            {/* Search-Input on grid-row-2 */}
            <div className="h-fit py-2 px-20">
                < input
                    className="w-full row-start-2 row-span-1 border-2 rounded bg-white text-black h-10 px-10"
                    placeholder="Search by Name"
                    type="text"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </>
    )
}

export default Input