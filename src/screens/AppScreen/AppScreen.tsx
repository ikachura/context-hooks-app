import React, {useContext, useState} from 'react'
import './AppScreen.css'
import {User, UserContext} from '../../contexts/UserContext'

const AppScreen: React.FC = () => {
  const {firstName} = useContext<User>(UserContext)
  const [value, setValue] = useState<string>('')

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {value}</p>
        <p>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </p>
      </header>
    </div>
  )
}

export {AppScreen}
