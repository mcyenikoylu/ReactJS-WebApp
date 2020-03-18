import React, {Component} from 'react';

const UserContext = React.createContext();

export  class UserProvider extends Component {
    
    state = {
        users:[
          {
          id : 1,
          Isim : "Cenker",
          Departman : "Youtuber",
          Maas : "18000"
          },
          {
            id : 2,
            Isim : "Cenk",
            Departman : "Dev",
            Maas : "45000"
            },
            {
              id : 3,
              Isim : "Berk",
              Departman : "Gamer",
              Maas : "6000"
              }
        ]
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