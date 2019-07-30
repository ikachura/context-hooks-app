import React from 'react'

type UserState = {
  firstName: string
  lastName: string
  age?: number
  bookIds: string[]
  changeFirstName: (value: string) => void
}

export const UserContext = React.createContext<UserState>({
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  bookIds: [],
  changeFirstName: (value: string) => {},
})

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
