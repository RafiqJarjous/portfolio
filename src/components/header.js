import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
//import App from '../App'
//import Body from './body'

function Header (){
  return(
  
 
  <div className='header'>
    <Link to='/'className='header' >
    <p>
     Rafiq's Gallery
    </p>
    </Link>

  </div>
  
  
  
  
  
  )
}
export default Header