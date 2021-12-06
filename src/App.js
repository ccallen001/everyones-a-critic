import { getAuth } from 'firebase/auth';

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Search from './routes/search/Search';
import Signin from './Signin';

import './App.css';

const instructions = (
  <p>Navigate to the Search page to search for movie by title.</p>
);

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getAuth().onAuthStateChanged((currentUser) => setCurrentUser(currentUser));
    console.log(currentUser);
  });

  return currentUser ? (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={instructions} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>Route not found!</h1>} />
      </Routes>

      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          padding: '0.5rem'
        }}
      >
        Current user is: {currentUser?.email}
      </footer>
    </div>
  ) : (
    <Signin />
  );
}

export default App;
