import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ProjectsContext } from '../../context/ProjectsContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { users } from '../../utils/users'
import { IconBack } from '../icons/Icons'

function getDate () {
  const currentDate = new Date()
  const date = currentDate.getDate() + '/' + currentDate.getMonth() + 1 + '/' + currentDate.getFullYear()
  return date
}

export function Form () {
  const { id } = useParams()
  const [project, setProject] = useState({})
  const { projects, setProjects } = useContext(ProjectsContext)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (id > 0) {
      setProject(projects.find(p => p.id === parseInt(id)))
    }
  }, [])

  const onSubmit = (data) => {
    const newId = id ? parseInt(id) : projects.length + 1
    const user = users.find(u => u.id === parseInt(data.user))

    const newProject = {
      id: newId,
      ...data,
      user,
      created: project?.created ?? getDate(),
      status: project?.status ?? true
    }

    const newProjects = [...projects]

    if (id > 0) {
      newProjects[id - 1] = newProject
    } else {
      newProjects[newId - 1] = newProject
    }

    setProjects(newProjects)
    navigate('/projects')
  }

  return (
    <>
      <div className='flex items-center space-x-3 bg-[#950101]'>
        <div className='w-10 h-10'>
          <Link className='block' to='/projects'> <IconBack /></Link>
        </div>
        <h3> {id > 0 ? 'Modificar Proyecto' : 'Nuevo Proyecto'} </h3>
      </div>
      <form className='flex flex-col w-52 justify-center m-auto space-y-2 ' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='title'>Titulo del proyecto</label>
        <input
          type='text'
          id='title'
          className='text-black'
          defaultValue={project ? project.title : ''}
          placeholder='Ingrese titulo del proyecto'
          {...register('title', {
            required: 'Debe ingresar un titulo al proyecto'
          })}
        />
        <span> {errors.title?.message} </span>

        <label htmlFor='desc'> Descripcion </label>
        <input
          className='text-black'
          type='text'
          id='desc'
          defaultValue={project ? project.desc : ''}
          placeholder='Ingrese descripcion del proyecto'
          {...register('desc', {
            required: 'Debe ingresar una descripcion para el proyecto'
          })}
        />
        <span> {errors.desc?.message} </span>

        <label htmlFor='user'>Responsable</label>
        <select
          className='text-black' {...register('user', {
            required: 'Elegir Responsable'
          })}
        >
          {id ? <></> : <option value=''>Elegir Responsable</option>}
          {
            users.map(user => (
              <option key={user.id} value={user.id} selected={project && project.user && user.id === project.user.id}>
                {user.name + ' ' + user.lastname}
              </option>
            ))
          }
        </select>
        <span> {errors.user?.message} </span>
        <button className='self-center w-24 text-sm p-2 bg-[#3D0000] rounded-xl bg- border-solid border-2 border-white'> {id > 0 ? 'Modificar' : 'Agregar'} </button>
      </form>
    </>
  )
}
