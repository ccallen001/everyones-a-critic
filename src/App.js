import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Search from './routes/search/Search';

import Header from './components/header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<p>Navigate to the Search page to search for a movie by title.</p>} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>Route not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
