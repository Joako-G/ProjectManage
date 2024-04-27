import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProjectsProvider } from './context/ProjectsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
