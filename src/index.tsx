import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppScreen from './components/AppScreen'
import * as serviceWorker from './serviceWorker'
import {UserProvider} from './contexts/UserContext'
import {BooksProvider} from './contexts/BooksContext'

ReactDOM.render(
  <UserProvider>
    <BooksProvider>
      <AppScreen />
    </BooksProvider>
  </UserProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
