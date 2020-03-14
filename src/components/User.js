import React, { Component } from 'react'
import propTypes from 'prop-types'

class User extends Component {

    static defaultProps = {
        Isim : "Deger yok",
        Departman : "Deger yok",
        Maas : "Deger yok"
    }

    render() {
//javascript destructing ozelligi   <li>Isim : {this.props.Isim} </li>
        const {Isim,Departman,Maas} = this.props; 
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>Gonder</button>
                </form>
                <ul>
                    <li>Isim : {Isim} <i className="fas fa-user-minus"></i></li>
                    <li>Departman : {Departman}</li>
                    <li>Maas : {Maas}</li>
                </ul>
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