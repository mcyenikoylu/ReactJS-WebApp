import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbar'
import Users from './components/Users'

class App extends Component {
  
  state = {
    users:[
      {
      id : 1,
      Isim : "Cenker",
      Departman : "Youtuber",
      Maas : "18000"
      },
      {
        id : 2,
        Isim : "Cenk",
        Departman : "Dev",
        Maas : "45000"
        },
        {
          id : 3,
          Isim : "Berk",
          Departman : "Gamer",
          Maas : "6000"
          }
    ]
  }

  render(){

    return (

      <div className="container">
         
        <Navbars title = "User App" />
        <hr/>

        {/* <User Isim = "Canim Oglum Cenker" 
        Departman = "Game" 
        Maas = "5000"
         />
        
        <User Isim = "Canim Oglum Cenker" 
        Departman = "Game" 
  
         /> */}

        <Users users = {this.state.users} />
      
      </div>
      );
  
    }

  }

export default App;