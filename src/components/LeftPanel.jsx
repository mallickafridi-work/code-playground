import React from 'react'
import { Link } from '@tanstack/react-router'

const LeftPanel = () => {

    const projectLink = [
        {
            id: 1,
            name: 'People',
            projectType: 'normal',
            to: '/People'
        },
        {
            id: 2,
            name: 'FakeAPI',
            projectType: 'intermediate',
            to: '/FakeAPI'
        },
        {
            id: 3,
            name: 'ContextAPI',
            projectType: 'Basic',
            to: '/ContextAPI'
        }
    ]

    function createProjectLink(project, index) {
        return (
            <Link
                key={index}
                to={project.to}
                className=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className='bg-card rounded content-center my-2 py-2 hover:bg-secondary hover:scale-110
                transition-all duration-400 ease-out'>
                    <h1 className='font-medium text-lg'>{project.name}</h1>
                </div>
            </Link>
        )
    }

    return (
        <div className="bg-background rounded col-start-1 col-span-1 min-w-70 my-2 ml-2 px-10 flex flex-col flex-wrap overflow-y-auto">
            <h1 className="py-2 text-xl font-bold underline">
                Projects
            </h1>
            {projectLink.map(createProjectLink)}
        </div>
    )
}

export default LeftPanel