import '../App.css';
import { useState, useEffect } from 'react';
import {getNotes, saveNote } from '../../../utilities/notes-service';

export default function NotesPage({ notes, addNote, setNotes }) {
  const [newNote, setNewNote] = useState('');

  const handleChange = (evt) => {
    setNewNote(evt.target.value);
  };

  const handleAddNote = async () => {
    addNote(newNote);
    console.log('==>', newNote)
    await saveNote(notes);
    setNewNote('');
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes); // Update the local state with fetched notes
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }
console.log(notes)

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
            <div key={note.createdAt}>
              <p>{note.text}</p>
              <p>Created at: {new Date(note.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    );
  }