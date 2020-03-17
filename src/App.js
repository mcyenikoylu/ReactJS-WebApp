import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Navbars from './components/Navbar'
import Users from './components/Users'
import UsersData from './components/UsersData'

function App() {
  
  

  return (



    <div className="Container">
       
      <Navbars title = "User App" />
      
      {/* <User Isim = "Canim Oglum Cenker" 
      Departman = "Game" 
      Maas = "5000"
       />
      
      <User Isim = "Canim Oglum Cenker" 
      Departman = "Game" 

       /> */}

      <Users users = {UsersData} />

    </div>
    );
}

export default App;
