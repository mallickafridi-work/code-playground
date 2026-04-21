import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../index.css'
import ThemeToggle from "../components/ThemeToggle"
import Clock from "../components/Clock";

type User = {
    id: number,
    image: string,
    firstName: string,
    lastName: string
}

export default function PeoplePage() {

    const [data, setData] = useState(null)
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

                const filteredUsers = data.users.filter((element: User) => {
                    const query = input.trim().toLowerCase();
                    // if (query.length < 1) return false
                    const firstName = element.firstName?.toLowerCase() || "";
                    const lastName = element.lastName?.toLowerCase() || "";
                    return firstName.includes(query) || lastName.includes(query);
                });
                setResults(filteredUsers)
            }

            catch (err: any) {
                console.error(err)
                setError(err.message);
            }
        }
        getData();
    }, [input])

    // 👇 Below code creates Card Div for users

    function createCard(user: User, index: number) {

        return (
            <Link
                key={index}
                to={`/${user.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center border-2 rounded-2xl w-50 h-50 hover:bg-blue-950 hover:text-white" >
                <div className="flex justify-center items-center">
                    <img src={user.image} alt="" />
                </div>
                <p className="w-fit"> User Id: {user.id}</p>
                <p className="w-fit"> First name: {user.firstName}</p>
                <p className="w-fit"> Last name: {user.lastName}</p>
            </Link >
        )
    }
    /* 👇 Below code is nested if else statements of displaying, 
     various content based of the results of filter function */

    let content;
    if (error) {
        content = <div className="self-center"> {error} </div>
    } else if (results.length !== 0) {
        content = results.map((user, index) => createCard(user, index))
    } else if (input.length > 0 && results.length === 0) {
        content = <div className="text-center"> user doesn't exist in the records</div>
    }

    function handleChange(e: any) {
        setInput(e.target.value)
    }

    return (
        <>
            <title>People</title>
            <div className="grid grid-rows-[auto_auto_1fr] h-screen w-screen">

                <div className="grid grid-cols-3 items-center bg-(var(--primary)) h-fit"> {/* header-container on grid-row-1 */}
                    <div className="col-start-1 col-span-1"> <Clock /> </div>
                    <h1 className="col-start-2 col-span-1 mb-2 text-(var(--text)) text-4xl font-bold">People</h1>
                    <div className="col-start-3 col-span-1"> <ThemeToggle /> </div>
                </div>

                {/* Search-Input on grid-row-2 */}
                <input
                    className="row-start-2 row-span-1 border-2 rounded bg-white text-black mx-10 px-10 h-10"
                    placeholder="Search by Name"
                    type="text"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />

                <div className="row-start-3 row-span-1 h-full overflow-y-auto"> {/* main-container on grid-row-3 */}
                    <div className="grid grid-cols-[auto_1fr] gap-2 p-2 h-full">

                        {/* Filter-Panel on col-1*/}
                        <div className="col-start-1 col-span-1 min-w-60 p-2 border-2 overflow-y-auto">
                            Filter Panel
                        </div>

                        <div className="px-12 py-6 border-2 overflow-y-auto"> {/* People-Card-Container on col-2 */}
                            <div className="grid grid-cols-4 gap-y-6 gap-x-6">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}