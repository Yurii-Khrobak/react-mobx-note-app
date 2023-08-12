import Notes from '../pages/Notes.jsx'
import Note from '../pages/Note.jsx'
import About from '../pages/About.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

export const routes = [
  {path: '/', element: <Notes/>},
  {path: '/notes', element: <Notes/>},
  {path: '/notes/:id', element: <Note/>},
  {path: '/:id', element: <Note/>},
  {path: '/about', element: <About/>},
  {path: '*', element: <NotFoundPage/>}
]
