import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './jumianav.jsx'
import './jumianav.css'
import Body from './grid.jsx'
import './grid.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Body />
  </React.StrictMode>,
)
