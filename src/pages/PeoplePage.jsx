import { Target } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../index.css'

export default function PeoplePage() {

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
            <Link
                key={user.id}
                to={`/${user.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center border-2 min-w-50 hover:bg-emerald-900 hover:text-white" >
                <div className="flex justify-center items-center">
                    <img src={user.image} alt="" />
                </div>
                <p className="p-1 w-fit"> User Id: {user.id}</p>
                <p className="p-1 w-fit"> First name: {user.firstName}</p>
                <p className="p-1 w-fit"> Last name: {user.lastName}</p>
            </Link >

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

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <div className="grid grid-rows-[auto_1fr] h-screen">
            <title>People</title>

            <div className="grid grid-cols-3 items-center bg-(var(--primary)) h-fit">
                <h1 className="col-start-2 col-span-1 py-2 text-(var(--text)) text-4xl font-bold">People</h1>
            </div>

            <div className='w-full filter flex flex-col items-center'>
                <input
                    className="w-100 border-5 border-double rounded bg-white text-black my-4 h-12"
                    placeholder="Search by Name"
                    type="text"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
                <p className="mb-6 w-40">example: search for Emma / emma </p>
                <hr className="border-2 w-full" />
                
                <div className="border-2 m-2 rounded overflow-y-auto">
                    <div className="px-10 py-5 flex justify-center gap-6 w-full">
                        {content}
                    </div>
                </div>
            </div>

        </div >

    )
}