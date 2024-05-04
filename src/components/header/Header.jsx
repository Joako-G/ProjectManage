import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header className='flex flex-col bg-[#950101]'>
      <h1 className='text-4xl font-bold my-5 self-center'>Project Manager</h1>
      <div className='flex justify-between items-center ml-10 p-2'>
        <h1>Mis Proyectos</h1>
        <Link className='text-sm p-2 mr-10 bg-[#3D0000] rounded-xl bg- border-solid border-2 border-white ' to='/newProject'>Nuevo Proyecto</Link>
      </div>
    </header>
  )
}
