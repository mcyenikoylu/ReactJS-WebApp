import React, { Component } from 'react';
import './App.css';
import Navbars from './components/Navbar'
import Users from './components/Users'
import AddUser from './components/AddUser'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  
  

  render(){

    return (

      <Router>
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

 {/* <AddUser />
        <Users  /> */}
     <Switch>
     <Route exact path = "/" component = {Users} />
     <Route exact path = "/add" component = {AddUser} />
<Route component = {NotFoundPage} />
</Switch>
      </div></Router>
      );
  
    }

  }

export default App;