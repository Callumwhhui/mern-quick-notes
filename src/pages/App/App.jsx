import {useState, useEffect} from 'react'
import './App.css';
import AuthPage from './AuthPage/AuthPage';
import NotesPage from './Notes/NotesPage';
import OrderHistoryPage from './OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/Navbar';
import { getUser, checkToken } from '../../utilities/users-service';

import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  const addNote = (newNoteText) => {
    // Create the new note object with text and user (assuming you have user info)
    const newNote = {
      text: newNoteText,
      createdAt: new Date(), // Add createdAt timestamp
    };

    // Update the state with the new note
    setNotes([...notes, newNote]);
  };


  return (
    <main>
      {user ?
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='notes' element={<NotesPage notes={notes} addNote={addNote}/>} />
        <Route path='orders/' element={<OrderHistoryPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/> 
    }
    </main>
  );
}

