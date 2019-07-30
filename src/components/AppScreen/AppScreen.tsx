import React from 'react'
import './AppScreen.css'
import User from '../User'
import Books from '../Books'

const AppScreen: React.FC = () => {
  return (
    <div className="App">
      <User />
      <Books />
    </div>
  )
}

export {AppScreen}
