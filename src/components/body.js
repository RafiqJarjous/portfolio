import React from 'react'
import TodoList from './todolist'
import Alarm from './alarm'
import Stream from './stream'
import {BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom'
import Map from './map'
import unnamed from './assest/unnamed.jpg'
import maps from './assest/maps.jpg'
import VPN from './vpn'
import PWM from './pwm'
import streamZ from './assest/streamZ.png'
import alarmZ from './assest/alarmZ.png'
import uberZ from './assest/uberZ.png'
import todoZ from './assest/todoZ.png'
import PWMZ from './assest/PWMZ.jpg'


function Body (){
    
  return(





<div>

<div className='work'> 
    <div className='maps'>
      <Link to='/vpn' path='/vpn'>
      <img src={unnamed} alt='Z'  />
      </Link>
      <p>
        This VPN is so OP Omg
      </p>
    </div>


    <div className='maps'>
      <Link to='/map'>
      <img src={uberZ} alt='Z'  />
      </Link>
      <p>
       good service
      </p> 
    </div>

    <div className='maps'>
      <Link to='/alarm'>
      <img src={alarmZ} alt='Z'/>
      </Link>
      <p>
       Sound the alarm 
      </p> 
    </div>
    <div className='maps'>
      <Link to='/map'>
      <img src={maps} alt='Z'/>
      </Link>
      <p>
       this is maps
      </p> 
    </div>
    <div className='maps'>
      <Link to='/stream'>
      <img src={streamZ} alt='Z'/>
      </Link>
      <p>
      this is stream 0
      </p> 
    </div>

    <div className='maps'>
      <Link to='/todolist'>
      <img src={todoZ} alt='Z'/>
      </Link>
      <p>
     this is stream 1
      </p> 
    </div>
    <div className='maps'>
      <Link to='/passwordmanager'>
      <img src={PWMZ} alt='Z'/>
      </Link>
      <p>
       this is stream 2
      </p> 
    </div>
</div>

</div>
    
  
  
  )
}
export default Body
