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
        }
    ]

    function createProjectLink(project, index) {
        return (
            <Link
                key={index}
                to={project.to}
                className="underline w-full"
                target="_blank"
                rel="noopener noreferrer"
            >
                {project.name}
            </Link>
        )
    }

    return (
        <div className="flex flex-col gap-2 min-w-30 mt-4 ml-2 overflow-y-auto">
            <h1 className="text-xl font-bold">Projects</h1>
            {projectLink.map(createProjectLink)}
        </div>
    )
}

export default LeftPanel