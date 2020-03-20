import React, { Component } from 'react'
import UserConsumer from '../context';
import axios from 'axios';

class UpdateUser extends Component {
    
    state = {
Isim : "",
Departman : "",
Maas :""

    }

changeInput = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

componentDidMount = async () => {
    const {id} = this.props.match.params;
    const res = await axios.get(`http://localhost:3004/users/${id}`);
    const {Isim,Departman,Maas} = res.data;
    this.setState({
        Isim,
        Departman,
        Maas
    });
}

updateUser = async (dispatch,e) =>{
    e.preventDefault();
  
    const {Isim,Departman,Maas} = this.state;

    const updated = {
        Isim,
        Departman,
        Maas
    };
    const {id} = this.props.match.params;
const res = await axios.put(`http://localhost:3004/users/${id}`,updated);
dispatch({type: "UPDATE_USER", payload: res.data});

this.props.history.push("/");
  
}
    render() {
        const {Isim,Departman,Maas} = this.state;

return<UserConsumer>
    {
        value => {
            const {dispatch} = value;
            return (
                <div className="col-md-8 mb-4">
    
           
                    <div className="card">
                        <div className="card-header">
                            <h4>Update User Form</h4>
    
                        </div>
    <div className="card-body">
        <form onSubmit = {this.updateUser.bind(this,dispatch)}>
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
            <button className="btn btn-danger btn-block" type="submit"> Guncelle</button>
        </form>
    </div>
                    </div>
                
                </div>
            )
        }
    }
</UserConsumer>

       
    }
}
export default UpdateUser;