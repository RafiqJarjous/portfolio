import React from 'react'
import {BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom'
import Map from './map'
import E9 from './assest/E9.png'
import M1 from './assest/M1.png'
import Todo1 from './assest/Todo1.png'
import Wp from './wp'
import l1 from './assest/l1.jpg'
import l2 from './assest/l2.jpg'
import l3 from './assest/l3.jpg'
import l4 from './assest/l4.jpg'
import wp from './assest/wp.png'
import VPN from './vpn'








function Body (){
    
  return(





<div>
  

<div className='work'> 
    <div className='maps'>
      <Link to='/vpn' path='/vpn'>
      <img src={l4} alt='Z'  />
      </Link>
      <p>
        E-Commerce
      </p>
    </div>


    
    <div className='maps'>
      <Link to='/map'>
      <img src={l3} alt='Z'/>
      </Link>
      <p>
       Blog
      </p> 
    </div>
    

    <div className='maps'>
      <Link to='/todolist'>
      <img src={l2} alt='Z'/>
      </Link>
      <p>
     TodoList
      </p> 
    </div>
    <div className='maps'>
      <Link to='/wp'>
      <img src={wp} alt='Z'/>
      </Link>
      <p>
     Wordpress Store
      </p> 
    </div>
    
</div>

</div>
    
  
  
  )
}
export default Body
