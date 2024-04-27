import { Route, Routes } from 'react-router-dom'
import { Projects } from './components/project/Projects'
import { Form } from './components/form/Form'

function App () {
  return (
    <div className='min-h-screen bg-[#000000] text-white '>
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/newProject' element={<Form />} />
        <Route path='/projects/:id' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
