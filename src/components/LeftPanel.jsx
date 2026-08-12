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
            name: 'React Hooks',
            projectType: 'normal',
            to: '/ReactHooks'
        },
        {
            id: 3,
            name: 'Ani-List',
            projectType: 'advanced',
            to: '/Anilist'
        },
    ]

    function createProjectLink(project, index) {
        return (
            <Link
                key={index}
                to={project.to}
                className=""    
                rel="noopener noreferrer"
            >
                <div className='bg-card rounded content-center my-2 py-2 hover:bg-secondary hover:scale-110
                transition-transform duration-400 ease-out'>
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