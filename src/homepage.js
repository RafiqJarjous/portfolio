import React ,{useState} from 'react'
import Baron from './components/assest/Baron.jpg'
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
            <img src={Baron} alt='Z' className='nickola' width='300px'/>
                
            
            </div>
            <div className={`paragraph ${Show===true&& 'paragraphnew'}`}><p>"...Welcome to my Portfolio ,i am a Junior Fullstack Web Developer ,specializes in making a scalable responsive Web Apps "</p></div>
            
            <div className={`bodypage ${Show===true&& 'bodypagenew'}`}>
                

           

          <div className='test'>
              <div  className='myapp'>
              <p>My Apps:</p>
              </div>
                       
                       <Body />
            </div>

           </div>
            
            
            <div className='navBox'>
       <div className={`navbar ${Show===true&& 'navbar-show'  } `}>
            <p>my name is Rafiq Jarjous
                  </p><break/>
            <p>and i am a business graduate and a Fullstack web developer </p><break/>
            <h5>Contact me at:</h5>
            <p>gmail: rafiq.jarjous96@gmail.com </p><break/>
            <p>phone number : +963 936213425  </p><break/>
            
           </div>
                
        </div>
        <button onClick={changeState} className={`btn--primary ${btnTxt===true && 'btn--secondary'}`} >{btnTxt === true && 'Show Less'}{btnTxt === false && 'About Me'}</button>
      
            
            
        </div>
    )
}
