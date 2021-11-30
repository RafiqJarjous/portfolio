

import './idk.css'
import M2 from './assest/M2.png'
import M3 from './assest/M3.png'
import M6 from './assest/M6.png'


function Map (){  


    return (


<div  className='idk'>
<h1>  Memories is a fullstack app developed with MERN stack , using a CRUD API </h1>
<div>
      
<img src={M2} alt='Z'/>
<p>This is the main page , you can create a post using the author name , give it a title , write a body and add an image , it also views all the posts</p>
</div>
<div>
<img src={M3} alt='Z'/>
<p>You can also see like and see the likes on a post and you can delete it</p>
</div>

<div>
<img src={M6} alt='Z'/>

</div>




</div>
    )
}
export default Map