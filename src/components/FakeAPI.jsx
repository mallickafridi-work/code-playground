import React, { useEffect, useState } from 'react'
import exifr from 'exifr'

const FakeAPI = () => {
    const [accessToken, setAccessToken] = useState()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const fetchMe = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username, // un:emilys 
                    password, // pw: emilyspass,
                    expiresInMins: 30, // optional, defaults to 60
                }),
            })
            const data = await response.json()
            setAccessToken(data.accessToken)
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMe();
    }

    return (
        <div className="fakeAPI">
            <p>Learning - ReactJS Authentication, RWTs, AccessToken & RefreshTokens</p>
            <form className='sign-in-box' onSubmit={handleSubmit}>
                <input className="input my-2 py-2"
                    type="text"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input className="input my-2 py-2"
                    type="text"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="submit-button" type='submit'> Sign In </button>
            </form>
        </div >
    )
}
export default FakeAPI