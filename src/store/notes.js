import { makeAutoObservable, runInAction } from 'mobx'
import {v4 as uuid4} from 'uuid'

class Notes {
  note = {}
  notes = []

  constructor() {
    makeAutoObservable(this)
    this.notes.push({id: uuid4(), title: 'Your note in our app!', body: 'For add note push + in the left bottom corner.'})
  }

  addNote() {
    this.note = {id: uuid4(), title: '', body: ''}
    this.notes.push(this.note)
    return(this.note)
  }

  getNoteById(id) {
    runInAction(() => {
      this.note = this.notes.find(n => id === n.id)
    })

    return(this.note)
  }

  removeNote(id) {
    this.notes = this.notes.filter(n => id !== n.id)
  }

  setTitle(id, title) { 
    runInAction(() => {
      this.note = this.getNoteById(id)
      this.note.title = title
    })
  }

  setBody(id, body) {
    runInAction(() => {
      this.note = this.getNoteById(id)
      this.note.body = body
    })
  }
}

export default new Notes()
