import { useEffect, useState } from "react"

const Filter = () => {

    const [input, setInput] = useState('') // Input Field to look for users 
    const [results, setResults] = useState([]) // to store the filtered user's from user.data after searching 
    const [error, setError] = useState(null)

    useEffect(() => {
        const API_URL = 'https://dummyjson.com/users'

        async function getData() {
            try {
                const response = await fetch(API_URL)
                const data = await response.json()

                // 👇 Below Function is to filter users from data.users if matches are found

                const filteredUsers = data.users.filter((element) => {
                    const query = input.trim().toLowerCase();
                    if (query.length < 1) return false
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

    // 👇 Below code creates Card Div for users

    function createCard(user, index) {
        return (
            <div
                key={user.id}
                className="flex flex-col items-center border-2 h-50 min-w-50">
                <div className="flex justify-center items-center">
                    <img src={user.image} alt="" />
                </div>
                <p className="p-1 w-fit"> First name: {user.firstName}</p>
                <p className="p-1 w-fit"> Last name: {user.lastName}</p>
            </div>
        )
    }

    // 👇 Below code is nested if else statements of displaying various content based of the results of filter function

    let content;
    if (error) {
        content = <div className="self-center"> {error} </div>
    } else if (results.length !== 0) {
        content = results.map((user, index) => createCard(user, index))
    } else if (input.length > 0 && results.length === 0) {
        content = <div className="self-center"> user doesn't exist in the records</div>
    } else {
        content = <div className="self-center"> user cards will appear here</div>
    }

    return (
        <div className='filter flex flex-col items-center'>
            <p>This is a basic filter</p>
            <input
                className="bg-gray-50 text-black my-4 h-6"
                placeholder="Search by Name"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <p className="mb-6 w-40">example: search for Emma / emma </p>
            <div className="flex justify-center gap-6 border-2 bg-grey overflow-x-auto h-70 w-full px-10 py-5">
                {content}
            </div>
        </div>

    )
}

export default Filter