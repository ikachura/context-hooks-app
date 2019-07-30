import React from 'react'
import ReactDOM from 'react-dom'
import AppScreen from '../index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppScreen />, div)
  ReactDOM.unmountComponentAtNode(div)
})
