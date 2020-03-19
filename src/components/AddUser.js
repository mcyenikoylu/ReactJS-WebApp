import React, { Component } from 'react'
import posed from 'react-pose'

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
isVisible : false
    }
changeVisibility = (e) => {
    this.setState({
        isVisible : !this.state.isVisible
    })
}
    render() {
        const {isVisible} = this.state;
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
    <form>
        <div className="form-group">
            <label htmlFor="name">Isim</label>
            <input id="id"
            type="text"
            name="name"
            placeholder="Isim gir"
            className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="departman">Departman</label>
            <input id="id"
            type="text"
            name="departman"
            placeholder="Departman gir"
            className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="maas">Maas</label>
            <input id="id"
            type="text"
            name="maas"
            placeholder="Maas gir"
            className="form-control"></input>
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
export default AddUser;