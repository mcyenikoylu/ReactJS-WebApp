import React from 'react';
import propTypes from 'prop-types';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Navbar(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <Link to = "/">Anasayfa</Link>
                </li>
                <li>
                    <Link to = "/add">Add User</Link>
                </li>
            </ul>
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