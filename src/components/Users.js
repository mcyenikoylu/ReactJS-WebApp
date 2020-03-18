import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../context';

class Users extends Component {
    render() {
        //const {users} = this.props;
        //console.log(users);
        return(
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>
                                {users.map(user => {
                                    return(
                                        <User 
                                        key = {user.id}
                                        Isim = {user.Isim}
                                        Departman = {user.Departman}
                                        Maas = {user.Maas} />
                                    )
                                })}                
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
        
    }
}
export default  Users;