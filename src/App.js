import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/User';
import Navbars from './components/Navbar'

function App() {
  return (
    <div className="Container">
      <h1> merhaba react </h1>
      <Navbars title = "User App" />
      <Users Isim = "Canim Oglum Cenker" 
      Departman = "Game" 
      Maas = "5000" />
      
      <Users Isim = "Canim Oglum Cenker" 
      Departman = "Game" 
       />
    </div>
  );
}

export default App;
