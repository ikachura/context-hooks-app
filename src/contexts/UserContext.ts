import {createContext} from 'react'

export type User = {
  firstName: string
  lastName: string
  age?: number
}

export const UserContext = createContext<User>({
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
})
