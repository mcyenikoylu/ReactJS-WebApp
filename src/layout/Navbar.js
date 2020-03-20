import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Navbar({title}){
    return(
        <div>
           
            <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/" className="navbar-brand">{title}</a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to = "/" className = "nav-link">Home</Link>
        </li>
        <li className="nav-item active">
          <Link to = "/add" className = "nav-link">Add User</Link>
       </li>
       
      </ul>
    
    </nav>
        </div>

    )

    
}
Navbar.propTypes = {
    title : propTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default Title"
}

export default Navbar;