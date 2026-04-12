import { useState, useEffect } from "react";
import Blocks from '../components/Blocks'
import FakeAPI from '../components/FakeAPI'
import Filter from '../components/Filter'
import ThemeToggle from '../components/ThemeToggle';

function Homepage() {

  return (
    <>
      <div className='grid grid-rows-[auto,1fr] min-h-screen'>
        <div className="grid grid-cols-[1fr,auto,1fr] bg-(var(--primary))">  {/* Header */}
          <h1 className='col-start-2 col-end-3 mx-auto py-2 text-(var(--text)) text-4xl font-bold'>code-playground</h1>
          <div className="relative col-start-3 col-end-4">
            <ThemeToggle />
          </div>
        </div>
        <div className='app py-5'>
          <Blocks />
          <hr className='my-5' />
          <Filter />
          <hr className='my-5' />
          <FakeAPI />
        </div>
      </div >

    </>
  )
}

export default Homepage