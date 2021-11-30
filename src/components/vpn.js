import React from 'react'
import E1 from './assest/E1.png'
import E6 from './assest/E6.png'
import E7 from './assest/E7.png'
import './idk.css'




export default function VPN() {
    return (


        <div  className='idk'>
            <h1> This is Memories </h1>

           <div>
           <img src={E1} alt='Z'/>
           <p>This is the main page , it shows all the products and add them to the cart and it shows how many items are in your cart ,with a fixed header</p>
        </div>
        <div>
           <img src={E6} alt='Z'/>
           <p>This is the cart , it shows you the items inside your cart and their count and total price, you can remove or increase their count</p>
        </div>

        <div>
           <img src={E7} alt='Z'/>
           <p>lastly this is the checkout where you choose the shipping address and control the shipping destination , connected to a shipping countries api</p>
        </div>
        



        </div>
       
    )
}
