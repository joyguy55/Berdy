import React from 'react'
import './style.scss'
import * as icons from './resources/svg.js'
import {Link} from 'react-router'

const SideBar = (props) => {
  return (
    <div className="sidebar-container">
      <ul>
        <Link to="/">
          <li>{icons.menu()}</li>
        </Link>
        <Link to="/watch">
          <li>{icons.sidelist()}</li>
        </Link>
      </ul>
    </div>
  )
}

export default SideBar
