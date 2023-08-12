import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import notesData from './store/notes.js'
import { DataContext } from './context'
import { routes } from './routes'
import NavBar from './components/NavBar.jsx'
import './sass/style.sass'

const App = () => {
  return (
    <DataContext.Provider value={notesData}>
      <BrowserRouter>
        <NavBar/>
        <div className='container'>
          <Routes>
            {routes.map(route => 
              <Route path={route.path} element={route.element}/>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App
