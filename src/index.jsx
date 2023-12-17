import React from 'react'
import ReactDOM from 'react-dom/client'
import NotesApp from './components/notesApp';
import './style/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>,
)
