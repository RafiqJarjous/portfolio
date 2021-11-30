
import './idk.css'
import Todo1 from './assest/Todo1.png'
import Todo2 from './assest/Todo2.png'
import Todo3 from './assest/Todo3.png'
import Todo6 from './assest/Todo6.png'
import React, {useState} from 'react'

function TodoList(){

let obj1 ={

    img : Todo1,
    str:"He Test"
}


    return(
<div  className='idk'>
<h1> TodoList </h1>
<div>
<img src={Todo1} alt='Z'/>
<p>This is the main page , you can create Todo items each one with a different color </p>
</div>
<div>
<img src={Todo2} alt='Z'/>
<p>you can edit the Todo items or delete them </p>
</div>
<div>
<img src={Todo3} alt='Z'/>

</div>


<div>
<img src={Todo6} alt='Z'/>

</div>




</div>
    )
}
export default TodoList