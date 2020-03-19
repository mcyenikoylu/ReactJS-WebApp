import React, {Component} from 'react';

const UserContext = React.createContext();

const reducer = (state,action) => {
    switch (action.type){
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user => action.playload !== user.id)
            }
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users,action.playload]
            }    
        default:
            return state;
    }
}
export  class UserProvider extends Component {
    
    state = {
        users:[
          {
          id : '1',
          Isim : "Cenker",
          Departman : "Youtuber",
          Maas : "18000"
          },
          {
            id : '2',
            Isim : "Cenk",
            Departman : "Dev",
            Maas : "45000"
            },
            {
              id : '3',
              Isim : "Berk",
              Departman : "Gamer",
              Maas : "6000"
              }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
      }

    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;