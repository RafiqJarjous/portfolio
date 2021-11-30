import React, {useState} from 'react'


export default function Navbar() {

        const [Show , setShow] = useState(false)
        const changeState = ()=> {setShow(!Show)
        setBtnTxt(!btnTxt)
        } 
        const [btnTxt , setBtnTxt] = useState(false)   


    return (
       
        <div>
             <div className='navBox'>
       <div className={`navbar ${Show===true&& 'navbar-show'  } `}>
            <p>Senior Android Dev   </p><break/>
            <p>Nickola Jarjous</p><break/>
           </div>
                
        </div>
        
        </div>
    )
}
