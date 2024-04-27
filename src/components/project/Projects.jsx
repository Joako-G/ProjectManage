import { useContext, useState } from 'react'
import { Modal } from '../modals/Modal'
import { Project } from './Project'
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../../context/ProjectsContext'

export function Projects () {
  const { projects, setProjects } = useContext(ProjectsContext)
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(0)

  const eliminar = (id) => {
    const newProjects = projects.filter(p => p.id !== id)
    setProjects(newProjects)
  }

  const handleClose = () => {
    setOpen(!open)
  }

  const handleClickYes = () => {
    eliminar(id)
    handleClose()
  }

  return (
    <>
      <header className='flex flex-col bg-[#950101]'>
        <h1 className='text-4xl font-bold my-5 self-center'>Project Manager</h1>
        <div className='flex justify-between items-center ml-10 p-2'>
          <h1>Mis Proyectos</h1>
          <Link className='text-sm p-2 mr-10 bg-[#3D0000] rounded-xl bg- border-solid border-2 border-white ' to='/projects/newProject'>Nuevo Proyecto</Link>
        </div>
      </header>
      <main className='flex mt-10'>
        <div className='m-auto '>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {
            projects.map(project => (
              <Project key={project.id} project={project} open={open} setOpen={setOpen} setId={setId} />
            ))
          }
          </div>
        </div>
        <Modal open={open} handleClose={handleClose} handleClickYes={handleClickYes} />
      </main>
    </>

  )
}
