import React, {Component} from 'react';
import Axios from 'axios';

const UserContext = React.createContext();

const reducer = (state,action) => {
    switch (action.type){
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users,action.payload]
            }    
        case "UPDATE_USER":
            return{
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            }    
        default:
            return state;
    }
}
export  class UserProvider extends Component {
    
    state = {
        users:[
        //   {
        //   id : '1',
        //   Isim : "Cenker",
        //   Departman : "Youtuber",
        //   Maas : "18000"
        //   },
        //   {
        //     id : '2',
        //     Isim : "Cenk",
        //     Departman : "Dev",
        //     Maas : "45000"
        //     },
        //     {
        //       id : '3',
        //       Isim : "Berk",
        //       Departman : "Gamer",
        //       Maas : "6000"
        //       }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }


        
      }

   
      componentDidMount = async () => {
        const response = await Axios.get("http://localhost:3004/users")
    this.setState({
        users : response.data
    })
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