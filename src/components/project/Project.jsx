import { useNavigate } from 'react-router-dom'
import { IconOptions, IconClose } from '../icons/Icons'
import { useState } from 'react'

export function Project ({ project, open, setOpen, setId }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const putProject = () => {
    navigate(`/${project.id}`)
  }

  return (
    <div key={project.id} className='border-solid border-2 rounded-md p-5 w-[500px] flex lg:w-[480px] xl:w-[500px]'>
      <div className='flex-col space-y-5'>
        <h1 className='text-md'> {project.title} </h1>
        <h1 className='flex text-sm'> Creation:
          <p className='ml-5'>
            {project.created}
          </p>
        </h1>
        <div className='flex items-center mb-2'>
          <img className='rounded-full h-8 w-8 lg:h-14 lg:w-14 mr-5' src={project.user.imgUrl} alt='' />
          <h1 className='text-sm'> @{project.user.name + ' ' + project.user.lastname} </h1>
        </div>
      </div>

      <div className=' flex flex-col justify-center gap-5 ml-auto'>
        {
          !isOpen
            ? (
              <button onClick={() => setIsOpen(!isOpen)} className=' border-solid border-2 w-10 h-10 rounded-lg p-2'>
                <IconOptions />
              </button>
              )
            : (
              <>
                <button onClick={() => setIsOpen(!isOpen)} className=' bg-white rounded-lg h-8 w-8 self-end'> <IconClose /> </button>
                <button className='text-sm p-2 bg-[#3D0000] rounded-xl bg- border-solid border-2 border-white' onClick={putProject}>
                  Modificar
                </button>
                <button
                  className='text-sm p-2  bg-[#3D0000] rounded-xl bg- border-solid border-2 border-white' onClick={() => {
                    setOpen(!open)
                    setId(project.id)
                  }}
                >
                  Eliminar
                </button>
              </>
              )
        }
      </div>
    </div>
  )
}
