import React, { Component } from 'react'

class UsersData extends Component {
    state = {
        users:[
          {
          id : 1,
          Isim : "Cenker",
          Departman : "Gamer",
          Maas : "18000"
          },
          {
            id : 2,
            Isim : "Cenk",
            Departman : "Gamer",
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
            <div>
                {this.state.users}
            </div>
        )
    }
}
export default UsersData;