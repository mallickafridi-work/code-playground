import { useState, useEffect } from "react";
import Blocks from '../components/Blocks'
import FakeAPI from '../components/FakeAPI'
import ThemeToggle from '../components/ThemeToggle';
import Clock from "../components/Clock";
import { Link } from "react-router-dom";
import ProjectPage from "./PeoplePage";

function Homepage() {

  const projectLink = [
    {
      id: 1,
      name: 'People',
      projectType: 'normal',
      to: '/PeoplePage'
    },
    {
      id: 2,
      name: 'FakeAPI',
      projectType: 'intermediate',
      to: '/PeoplePage'
    }
  ]

  function createProjectLink(project, index) {

    return (
      <Link
        key={index}
        to={project.to}
        className="border-2 rounded py-2 w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.name}
      </Link>
    )

  }

  return (

    <div className="grid grid-rows-[auto_1fr] h-screen">
      {/* Header Div */}
      <div className="grid grid-cols-3 items-center bg-(var(--primary)) h-fit">

        <div className="col-start-1 col-span-1"> <Clock /> </div>

        <h1 className="col-start-2 col-span-1 py-2 text-(var(--text)) text-4xl font-bold">code-playground </h1>

        <div className="col-start-3 col-span-1"> <ThemeToggle /> </div>

      </div>

      <div className="min-h-0"> {/* This is defined to have a scrollable div as a child*/}
        <div className="grid grid-cols-[auto_1fr] gap-2 h-full">

          <div className="flex flex-col gap-2 min-w-50 my-2 ml-2 p-2 border-2 rounded overflow-y-auto"> {/*Left-Side Panel */}
            <h1 className="text-xl font-bold">Projects</h1>
            {projectLink.map(createProjectLink)}
          </div>

          <div className="border-2 my-2 mr-2 rounded overflow-y-auto"> {/*Right-Main Content */}
            <div className='app py-5'>
              <Blocks />
              <hr className='my-5' />
              <FakeAPI />
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Homepage