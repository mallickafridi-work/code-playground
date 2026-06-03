import { useContext } from 'react'
import { ThemeContext } from '@/routes/ContextAPI'
import React from 'react'

const Navbar = () => {

  const { theme  } = useContext(ThemeContext)

  function handleClick() {
    console.log(theme)
  }

  return (
    <div>
      <button className='border-2' onClick={handleClick}> Display Current Theme</button>
    </div>
  )
}

export default Navbar