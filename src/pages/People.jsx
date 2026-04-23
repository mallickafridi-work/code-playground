import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/1_Header/Header";
import Input from "../components/People/Input";

export default function PeoplePage() {

    const [input, setInput] = useState('') // Input Field to look for users 
    const [results, setResults] = useState([]) // to store the filtered user's from user.data after searching 
    const [error, setError] = useState(null)

    // 👇 Below Function creates Card Div for users
    function createCard(user, index) {

        return (
            <Link
                key={index}
                to={`/${user.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-45 h-48 rounded flex flex-col 
                items-center justify-center
                hover:bg-blue-950 hover:-translate-y-2 hover:scale-110
                transition-all delay-150 duration-400 ease-in-out" >
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
    } else if (input.length > 0 && results.length === 0) {
        content = <div className="text-center"> user doesn't exist in the records</div>
    } else {
        content = results.map((user, index) => createCard(user, index))
    }

    return (
        <>
            <title>People</title>
            <div className="grid grid-rows-[auto_auto_1fr] h-screen w-screen">

                <Header title="People" />
                <Input input={input} setInput={setInput} setResults={setResults} setError={setError} />

                <div className="row-start-3 row-span-1 h-full overflow-y-auto"> {/* main-container on grid-row-3 */}
                    <div className="grid grid-cols-[auto_1fr] gap-2 px-2 h-full">

                        {/* Filter-Panel on col-1*/}
                        <div className="col-start-1 col-span-1 min-w-60 p-2 border-2 overflow-y-auto">
                            Filter Panel
                        </div>

                        {/* People-Card-Container on col-2 */}
                        <div className="px-18 py-6 border-2 overflow-y-auto">
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