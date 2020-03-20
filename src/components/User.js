import React, { Component } from 'react'
import propTypes from 'prop-types'
import UserConsumer from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class User extends Component {

    static defaultProps = {
       id: '0',
        Isim : "Deger yok",
        Departman : "Deger yok",
        Maas : false
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isVisible : false
            
    //     }
    // }
    state = {
        isVisible : false
        
    }
    onClickEvent = (e) =>{
        
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    onDeleteUser = async (dispatch,e) => {
        const {id} = this.props;
        await axios.delete(`http://localhost:3004/users/${id}`);
        dispatch({type : "DELETE_USER", payload:id});
        //console.log(id);
    }

    render() {
//javascript destructing ozelligi   <li>Isim : {this.props.Isim} </li>
        
const {id,Isim,Departman,Maas} = this.props; 
const {isVisible} = this.state;

return(
    <UserConsumer>
        {
            value => {
                const {dispatch} = value;

        return (
            <div className = "col-md-8 mb-4" >
                <div className="card" style={isVisible  ? {backgroundColor : "#62848d", color : "#fff"} : null} >
                    <div className="card-header d-flex justify-content-between">
        <h4 className="d-inline" onClick = {this.onClickEvent}>{`${id} ${Isim}`}</h4>
        
        <i onClick = {this.onDeleteUser.bind(this,dispatch)} 
        className="far fa-trash-alt" style={{cursor : "pointer"}}></i>
        
                    </div>
                    <div className="card-body">
                {
                isVisible !== false ? <p className="card-text">Maas : {Maas}</p> 
                : null }
        <p className="card-text">Departman : {Departman}</p>
     
        
                </div>
                
                <Link to = {`edit/${id}`} className="btn btn-dark btn-block">Duzenle</Link>
                </div>
                
            </div>



        )
            }
        }
    </UserConsumer>
)

    }
}
User.propTypes = {
    Isim : propTypes.string.isRequired,
    Departman : propTypes.string.isRequired,
    Maas : propTypes.string.isRequired,
    id: propTypes.string.isRequired
}
export default User;