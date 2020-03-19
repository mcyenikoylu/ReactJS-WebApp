import React, { Component } from 'react';
import './App.css';
import Navbars from './components/Navbar'
import Users from './components/Users'
import AddUser from './components/AddUser'

class App extends Component {
  
  

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
  
         /> 

          <Users users = {this.state.users} />
 */}

 <AddUser />
        <Users  />
     


      </div>
      );
  
    }

  }

export default App;