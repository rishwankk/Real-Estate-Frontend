import React from 'react';
import './layout.scss'; 
import NavBar from './components/navbar/NavBar';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
     <NavBar />

      </div>
      <div className="content">
     <Homepage />

      </div>
    </div>
  );
};

export default App;
