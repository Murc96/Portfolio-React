import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const loadContent = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar loadContent={loadContent} />
      <Sidebar />
      <Content currentPage={currentPage} loadContent={loadContent} />
    </div>
  );
}

export default App;
