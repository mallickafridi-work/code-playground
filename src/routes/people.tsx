import { useState, useEffect } from "react"
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from "@tanstack/react-query";
import Header from '../components/Header';
import Input from '../components/Input';
import SelectGenderCard from "../components/People/SelectGenderCard";

// Type definitions for API response
interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
  };
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export const Route = createFileRoute('/people')({
  component: RouteComponent,
  meta: () => ({
    title: 'People',
    description: 'this is people-page'
  })
})

function RouteComponent() {

  const [input, setInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]) // to store the filtered user's from user.data after searching 
  const [gender, setGender] = useState<string>("default")

  const fetchUsers = async (): Promise<UsersResponse> => {
    const API_URL = 'https://dummyjson.com/users'
    const response = await fetch(API_URL)
    return await response.json() as UsersResponse
  }

  const { data, isLoading, isError, error } = useQuery<UsersResponse, Error>({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  useEffect(() => {
    if (!data?.users) return;

    setFilteredUsers(
      data.users.filter(user => {
        const query = input.toLowerCase()

        const matchSearch =
          !query ||
          user.firstName.toLowerCase().includes(query) ||
          user.lastName.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)

        const matchGender =
          !gender || gender === 'default' || user.gender === gender

        return matchSearch && matchGender
      })
    )
  }, [input, gender, data])

  if (isLoading) return <h1>Loading ... </h1>
  if (isError) return <pre>{JSON.stringify(error.message)}</pre>

  // 👇 Below Function creates Card Div for users
  function createPeopleCard(user: User) {

    return (
      <div
        key={user.id}
        // to={`/${user.firstName + '_' + user.lastName}`}
        rel="noopener noreferrer"
        className="w-45 h-52 rounded flex flex-col 
                items-center justify-center
                hover:bg-secondary hover:-translate-y-2 hover:scale-110
                transition-all duration-400 ease-out" >
        <div className="flex justify-center items-center">
          <img src={user.image} alt="" />
        </div>
        <p className="w-fit"> User Id: {user.id}</p>
        <p className="w-fit"> First name: {user.firstName}</p>
        <p className="w-fit"> Last name: {user.lastName}</p>
      </div>
    )
  }

  /* 👇 Below code is nested if else statements of displaying, 
   various content based of the results of filter function */

  let content;
  if (filteredUsers.length === 0) {
    content = <div className="h-full content-center self-center">user doesn't exist in the records</div>
  } else {
    content =
      <div className="px-6 content-start rounded">
        <div className="p-10 flex flex-wrap justify-center gap-y-10 gap-x-10">
          {filteredUsers.map((user: User) => createPeopleCard(user))}
        </div >
      </div>
  }

  return (
    <>
      <title>People</title>
      <div className="my-0 mx-auto grid grid-rows-[auto_auto_1fr] h-screen w-screen text-center bg-secondary text-text">

        <Header title="People" />
        <Input setInput={setInput} />

        <div className="row-start-3 row-span-1 h-full overflow-y-auto"> {/* main-container on grid-row-3 */}
          <div className="grid grid-cols-[auto_1fr] gap-2 px-2 pb-2 h-full">

            {/* Filter-Panel on col-1*/}
            <div className="bg-background rounded col-start-1 col-span-1 min-w-70 p-2 overflow-y-auto">
              <p className="my-2 border rounded">filter by - </p>

              <SelectGenderCard setGender={setGender} />

            </div>

            {/* People-Card-Container on col-2 */}
            <div className="bg-background rounded overflow-y-auto">
              {content}
            </div>

          </div>
        </div>
      </div >
    </>
  )
}