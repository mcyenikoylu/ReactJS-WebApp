import React, { Component } from 'react'
import propTypes from 'prop-types'

class User extends Component {

    static defaultProps = {
        Isim : "Deger yok",
        Departman : "Deger yok",
        Maas : "Deger yok"
    }
    constructor(props){
        super(props);
        this.state = {
            isVisible : false
            
        }
    }
    render() {
//javascript destructing ozelligi   <li>Isim : {this.props.Isim} </li>
        
const {Isim,Departman,Maas} = this.props; 
const {isVisible} = this.state;


        return (
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
        <h4 className="d-inline">{Isim}</h4>
        <i className="far fa-trash-alt" style={{cursor : "pointer"}}></i>
                    </div>
                    <dic className="card-body">
                {
                isVisible ? <p className="card-text">Maas : {Maas}</p> 
                : null }
        <p className="card-text">Departman : {Departman}</p>
     

                </dic>
                </div>
                
            </div>



        )
    }
}
User.propTypes = {
    Isim : propTypes.string.isRequired,
    Departman : propTypes.string.isRequired,
    Maas : propTypes.string.isRequired
}
export default User;