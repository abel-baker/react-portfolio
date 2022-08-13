import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <>
    <Header />

    <main className="main">
      <Projects />
    </main>

    
    </>
  );
}

export default App;
