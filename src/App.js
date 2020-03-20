import React, { Component } from 'react';
import './App.css';
import Navbars from './layout/Navbar'
import Users from './components/Users'
import AddUser from './forms/AddUser'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import UpdateUser from './forms/UpdateUser';

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

<Route exact path = "/edit/:id" component = {UpdateUser} />

<Route component = {NotFoundPage} />
</Switch>
      </div></Router>
      );
  
    }

  }

export default App;