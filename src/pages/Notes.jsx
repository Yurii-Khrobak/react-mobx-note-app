import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { DataContext } from '../context'

const Notes = observer(() => {
  const notesData = useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()
  if(location.pathname === '/notes')
    location.pathname += '/'

  const addNote = () => {
    const note = notesData.addNote()
    navigate(location.pathname + note.id)
  }

  if (!notesData.notes) {
    return(
      <h1>You dont have notes.</h1>
    )
  }
  
  return (
    <div className='notesList'> 
      {notesData.notes.map(note =>
        <Link to={location.pathname + note.id} className='noteItem' key={note.id}>
	  <h3 className='noteItem__title'>{note.title ? note.title : 'Empty'}</h3>
	  <p className='noteItem__body'>{note.body ? note.body : 'Empty'}</p>
	</Link>
      )}
      <div className='noteAddBtn' onClick={addNote}></div>
    </div>
  )
})

export default Notes
