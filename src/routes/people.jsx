import { useState, useEffect } from "react"
import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from "@tanstack/react-query";
import Header from '../components/Header';
import Input from '../components/Input';

export const Route = createFileRoute('/people')({
  component: RouteComponent,
})

function RouteComponent() {

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  const [input, setInput] = useState('') // Input Field to look for users 
  const [filteredUsers, setFilteredUsers] = useState([]) // to store the filtered user's from user.data after searching 
  const [gender, setGender] = useState('')
  const [selectedState, setSelectedState] = useState('');

  const fetchUsers = async () => {
    const API_URL = 'https://dummyjson.com/users'
    const response = await fetch(API_URL)
    return await response.json()
  }

  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  useEffect(() => {
    if (!data?.users) return

    const query = input.trim().toLowerCase()

    const filtered = data.users.filter(user => {
      const firstName = user.firstName?.toLowerCase() || ''
      const lastName = user.lastName?.toLowerCase() || ''
      const email = user.email?.toLowerCase() || ''

      const matchesName =
        firstName.includes(query) ||
        lastName.includes(query) ||
        email.includes(query)

      const matchesGender =
        !gender || user.gender.toLowerCase() === gender.toLowerCase()

      const matchesSelectedState =
        !selectedState || user.address.state.toLowerCase() === selectedState.toLowerCase()

      return matchesName && matchesGender && matchesSelectedState
    })

    setFilteredUsers(filtered)
  }, [input, gender, data, selectedState])

  // 👇 Below Function creates Card Div for users
  function createCard(user) {

    return (
      <Link
        key={user.id}
        to={`/${user.firstName + '_' + user.lastName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-45 h-48 rounded flex flex-col 
                items-center justify-center
                hover:bg-black/40 hover:-translate-y-2 hover:scale-110
                transition-all duration-400 ease-out" >
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
  if (filteredUsers.length === 0) {
    content = <div className="self-center">user doesn't exist in the records</div>
  } else {
    content =
      <div className="px-16 py-6 grid border-2 overflow-y-auto">
        <div className="grid grid-cols-4 gap-y-6 gap-x-6">
          {filteredUsers.map((user, index) => createCard(user, index))}
        </div >
      </div>
  }

  return (
    <>
      <title>People</title>
      <div className="grid grid-rows-[auto_auto_1fr] h-screen w-screen">

        <Header title="People" />
        <Input input={input} setInput={setInput} />

        <div className="row-start-3 row-span-1 h-full overflow-y-auto"> {/* main-container on grid-row-3 */}
          <div className="grid grid-cols-[auto_1fr] gap-2 px-2 h-full">

            {/* Filter-Panel on col-1*/}
            <div className="col-start-1 col-span-1 min-w-60 p-2 border-2 overflow-y-auto">
              <p className="my-2 border">filter by - </p>
              <form className="flex flex-col my-2" action="">

                <label><input className="mr-2" type="radio" value='male'
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />Male</label>

                <label><input className="mr-2" type="radio" value='female'
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />Female</label>
              </form>
              <hr />

              {/* <div className="my-2">
                                <select
                                    className="mt-2 block"
                                    id="state-select"
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >

                                    <option className="" value="">--Select a State--</option>
                                    {states.map((state) => (
                                        <option key={state} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </select>
                            </div> */}
              <hr />


            </div>

            {/* People-Card-Container on col-2 */}

            {content}

          </div>
        </div>
      </div>
    </>
  )

}
