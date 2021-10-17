import React ,{useState} from 'react'
import Nickola from './components/assest/Nickola.jpg'
import Body from './components/body'
import Navbar from './components/navbar'



export default function Homepage() {
    const [Show , setShow] = useState(false)
        const changeState = ()=> {setShow(!Show)
        setBtnTxt(!btnTxt)
        } 
        const [btnTxt , setBtnTxt] = useState(false)   

    return (
        <div>
            <div className={`homepage  ${Show===true&&'homepagenew'}  `}>
            <img src={Nickola} alt='Z' className='nickola' width='300px'/>
                
            
            </div>
            <div className={`paragraph ${Show===true&& 'paragraphnew'}`}><p>"...Welcome to my Site ,i am a Senior Mobile Developer , Specialzes in making a scalable Full Stack Mobile Apps"</p></div>
            
            <div className={`bodypage ${Show===true&& 'bodypagenew'}`}>
                

           

          <div className='test'>
    <        p>My Apps</p>
                       <Body />
            </div>

           </div>
            
            
            <div className='navBox'>
       <div className={`navbar ${Show===true&& 'navbar-show'  } `}>
            <p>Senior Android Dev   </p><break/>
            <p>Nickola Jarjous</p><break/>
           </div>
                
        </div>
        <button onClick={changeState} className={`btn--primary ${btnTxt===true && 'btn--secondary'}`} >{btnTxt === true && 'clicked'}{btnTxt === false && 'click'}</button>
      
            
            
        </div>
    )
}
