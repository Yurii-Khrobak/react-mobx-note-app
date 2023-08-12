import React, { useContext }  from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DataContext } from '../context'
import { observer } from 'mobx-react-lite'
import MyButton from '../components/UI/MyButton.jsx'
import MyTextArea from '../components/UI/MyTextArea.jsx'

const Note = observer(() => {
  const { id } = useParams()
  const notesData = useContext(DataContext)
  const note = notesData.getNoteById(id)
  const navigate = useNavigate()
  
  const removeNote = () => {
    notesData.removeNote(note.id)
    navigate(-1)
  }

  if(!note) {
    return(
      <h1>Dont found note.</h1>
    )
  }

  return (
    <div className='notePage'>
      <MyButton style={{marginLeft: 'auto'}} onClick={removeNote}>Delete</MyButton>
      <MyTextArea placeholder='Title...' value={note.title} onChange={e => notesData.setTitle(note.id, e.target.value)}/>
      <MyTextArea placeholder='Body...' value={note.body} onChange={e => notesData.setBody(note.id, e.target.value)}/>
    </div>
  )
})

export default Note
