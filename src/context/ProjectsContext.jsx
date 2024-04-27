import { createContext, useState } from 'react'
import { mockProjects } from '../utils/projects'

export const ProjectsContext = createContext()

export function ProjectsProvider ({ children }) {
  const [projects, setProjects] = useState(mockProjects)

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}
