import React from 'react'
import {User} from '../interfaces/User'

type UserState = User & {
  changeFirstName: (value: string) => void
}

export const UserContext = React.createContext<UserState>((undefined as any) as UserState)

export class UserProvider extends React.Component<any, UserState> {
  constructor(props: any) {
    super(props)

    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      age: 22,
      bookIds: [],
      changeFirstName: this.changeFirstName,
    }
  }

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>
  }

  changeFirstName = (value: string) => {
    this.setState({firstName: value})
  }

  addBook(id: string) {

  }

  removeBook(id: string) {

  }
}
