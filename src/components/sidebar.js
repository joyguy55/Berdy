import React from 'react'
import './style.scss'
import * as icons from './resources/svg.js'
import {Link} from 'react-router'

const navigation = [
  {
    path: '/',
    text: 'Browse',
    active: ''
  }, {
    path: '/watch',
    text: 'WatchList',
    active: ''
  }
]

class SideBar extends React.Component{
 constructor(){
  super()
  this.state = {
   selected:''
  }
 }

setSelected(selection){
 this.setState({selected  : selection})
}

setActive(value){
 return ((value===this.state.selected) ?'active':'');
}

 render(){
  return (
    <div className="sidebar-container">
      <ul>
        {navigation.map((obj, index) => {
          return (
            <Link key={index} to={obj.path}>
              <li className={this.setActive(obj.text)} onClick={ () => {this.setSelected(obj.text)} }>{obj.text}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )}
}

export default SideBar
