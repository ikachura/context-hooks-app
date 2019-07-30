import React, {useContext} from 'react'
import './User.css'
import {UserContext} from '../../contexts/UserContext'

const User: React.FC = () => {
  const {firstName, changeFirstName} = useContext(UserContext)

  return (
    <div className="User">
      <header className="User-header">
        <p>Global value: {firstName}</p>
        <p>
          <input value={firstName} onChange={(e) => changeFirstName(e.target.value)} />
        </p>
      </header>
    </div>
  )
}

export {User}
