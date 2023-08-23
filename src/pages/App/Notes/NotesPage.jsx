import '../App.css';
import { useState } from 'react';

export default function NotesPage({ notes, addNote }) {
  const [newNote, setNewNote] = useState('');

  const handleChange = (evt) => {
    setNewNote(evt.target.value);
  };

  const handleAddNote = () => {
    console.log("");
    addNote(newNote);
    setNewNote('');
  }
    return (
      <div>
        <h1>Notes</h1>
        <div>
          <textarea cols="50" rows="10" value={newNote} onChange={handleChange} placeholder='Enter New Note...'></textarea>
          <button onClick={handleAddNote}>Add Note</button>
        </div>
        {notes.length === 0 ? (
          <p>No Notes Yet!</p>
        ) : (
          notes.map((note) => (
            <div key={note._id}>
              <p>{note.text}</p>
              <p>Created at: {new Date(note.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    );
  }