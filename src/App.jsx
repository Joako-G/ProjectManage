import { Route, Routes } from 'react-router-dom'
import { Projects } from './components/project/Projects'
import { Form } from './components/form/Form'

function App () {
  return (
    <div className='min-h-screen bg-[#000000] text-white '>
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/newProject' element={<Form />} />
        <Route path='/:id' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
