import { useState } from 'react'
import { Modal } from '../modals/Modal'
import { Project } from './Project'
import { Link } from 'react-router-dom'
import { useStorage } from '../../hooks/useStorage'
import { Pagination } from '../pagination/Pagination'

function usePagination ({ results }) {
  const totalProjects = results.length
  const projectsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const lastIndex = currentPage * projectsPerPage
  const firstIndex = lastIndex - projectsPerPage

  return { currentPage, setCurrentPage, projectsPerPage, totalProjects, firstIndex, lastIndex }
}

export function Projects () {
  const { projects, setProjects } = useStorage()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(0)
  const results = !query ? projects : projects.filter((project) => project.title.toLowerCase().includes(query.toLocaleLowerCase()))
  const { currentPage, setCurrentPage, projectsPerPage, totalProjects, firstIndex, lastIndex } = usePagination({ results })
  // const totalProjects = results.length
  // const projectsPerPage = 6
  // const [currentPage, setCurrentPage] = useState(1)
  // const lastIndex = currentPage * projectsPerPage
  // const firstIndex = lastIndex - projectsPerPage
  const eliminar = (id) => {
    const newProjects = projects.filter(p => p.id !== id)
    if (projects.length > 0) {
      window.localStorage.setItem('projects', JSON.stringify(newProjects))
      setProjects(newProjects)
    }
  }

  const handleClose = () => {
    setOpen(!open)
  }

  const handleClickYes = () => {
    eliminar(id)
    handleClose()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value

    if (newQuery.startsWith(' ')) return

    setQuery(event.target.value)
  }

  return (
    <>
      <header className='flex flex-col bg-[#950101]'>
        <h1 className='text-4xl font-bold my-5 self-center'>Project Manager</h1>
        <div className='flex justify-between items-center ml-10 p-2'>
          <h1>Mis Proyectos</h1>
          <Link className='text-sm p-2 mr-10 bg-[#3D0000] rounded-xl bg- border-solid border-2 border-white ' to='/newProject'>Nuevo Proyecto</Link>
        </div>
      </header>
      <div className='flex justify-center mt-10'>
        <label className='mr-5' htmlFor='search'>Buscador</label>
        <input onChange={handleChange} value={query} type='text' id='search' className='text-black w-[40%] md:w-80 rounded-md border-solid border-2' />
      </div>
      <main className='flex flex-col mt-5 h-[1150px] lg:h-[650px]'>
        <div className='m-auto md:my-auto h-[100%]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {
              results.map(project => (
                <Project key={project.id} project={project} open={open} setOpen={setOpen} setId={setId} />
              )).slice(firstIndex, lastIndex)
            }
          </div>
        </div>
        <Modal open={open} handleClose={handleClose} handleClickYes={handleClickYes} />

      </main>
      <div className='mt-auto'>
        <Pagination
          currentPage={currentPage}
          projectsPerPage={projectsPerPage}
          setCurrentPage={setCurrentPage}
          totalProjects={totalProjects}
        />
      </div>
    </>

  )
}
