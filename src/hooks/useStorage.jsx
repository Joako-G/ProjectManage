import { useContext, useEffect } from 'react'
import { ProjectsContext } from '../context/ProjectsContext'

export function useStorage () {
  const { projects, setProjects } = useContext(ProjectsContext)

  useEffect(() => {
    const projectsStorage = window.localStorage.getItem('projects')
    if (projectsStorage) {
      setProjects(JSON.parse(projectsStorage))
    }
  }, [])

  return { projects, setProjects }
}
