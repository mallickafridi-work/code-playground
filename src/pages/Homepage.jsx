import { useState, useEffect } from "react";
import Blocks from '../components/Blocks'
import FakeAPI from '../components/FakeAPI'
import Filter from '../components/Filter'
import ThemeToggle from '../components/ThemeToggle';

function Homepage() {

  return (

    <div className="grid grid-rows-[auto_1fr] h-screen">
      {/* Header Div */}
      <div className="grid grid-cols-3 items-center bg-[var(--primary)] h-fit">

        <h1 className="col-start-2 col-span-1 py-2 text-[var(--text)] text-4xl font-bold">
          code-playground
        </h1>

        <div className="col-start-3 col-span-1"> <ThemeToggle /> </div>

      </div>

      <div className="min-h-0"> {/* This is defined to have a scrollable div as a child*/}
        <div className="grid grid-cols-[auto_1fr] h-full">

          <div className="border-2 min-w-50 overflow-y-auto"> {/*Left-Side Panel */}
            Left-Side Panel
          </div>

          <div className="bg-black border-2 overflow-y-auto"> {/*Right-Main Content */}
            <div className='app py-5'>
              <Blocks />
              <hr className='my-5' />
              <Filter />
              <hr className='my-5' />
              <FakeAPI />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage