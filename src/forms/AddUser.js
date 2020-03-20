import React, { Component } from 'react'
import posed from 'react-pose'
import UserConsumer from '../context';
import Axios from 'axios';

//var uniqid = require('uniqid');

const Animation = posed.div({
    visible : {
        opacity : 1,
applyAtStart : {
    display : "block"}
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

class AddUser extends Component {
    
    state = {
isVisible : false,
Isim : "",
Departman : "",
Maas :""

    }
changeVisibility = (e) => {
    this.setState({
        isVisible : !this.state.isVisible
    })
}

// changeIsim = (e) => {
// this.setState({
//     Isim : e.target.value
// })
// }

// changeDepartman = (e) => {
//     this.setState({
// Departman : e.target.value
// })}

// changeMaas = (e) => {
//     this.setState({
// Maas : e.target.value
// })}

changeInput = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}


addUser = async (dispatch,e) =>{
    e.preventDefault();
    const {Isim,Departman,Maas} = this.state;
    const newUser = {
        //id : uniqid(),
        Isim:Isim,
        Departman:Departman,
        Maas:Maas
        
    }
    const response = await Axios.post('http://localhost:3004/users',newUser)
    dispatch({type: "ADD_USER", payload: response.data});
this.props.history.push("/");
}
    render() {
        const {isVisible,Isim,Departman,Maas} = this.state;

return<UserConsumer>
    {
        value => {
            const {dispatch} = value;
            return (
                <div className="col-md-8 mb-4">
    
            <button onClick={this.changeVisibility} 
            className="btn btn-dark btn-block mb-2">{isVisible ? "Form Gizle" : "Form Goster"}</button>
    <Animation pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    <div className="card">
                        <div className="card-header">
                            <h4>Add User Form</h4>
    
                        </div>
    <div className="card-body">
        <form onSubmit = {this.addUser.bind(this,dispatch)}>
            <div className="form-group">
                <label htmlFor="name">Isim</label>
                <input id="id"
                type="text"
                name="Isim"
                placeholder="Isim gir"
                className="form-control"
                value = {Isim}
                onChange = {this.changeInput}
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="departman">Departman</label>
                <input id="id"
                type="text"
                name="Departman"
                placeholder="Departman gir"
                className="form-control"
                value = {Departman}
                onChange = {this.changeInput}></input>
            </div>
            <div className="form-group">
                <label htmlFor="maas">Maas</label>
                <input id="id"
                type="text"
                name="Maas"
                placeholder="Maas gir"
                className="form-control"
                value = {Maas}
                onChange = {this.changeInput}></input>
            </div>
            <button className="btn btn-danger btn-block"> Kaydet</button>
        </form>
    </div>
                    </div>
                    </Animation>
                </div>
            )
        }
    }
</UserConsumer>

       
    }
}
export default AddUser;