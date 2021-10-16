import stream from './assest/stream.png'
import stream2 from './assest/stream2.png'
import stream3 from './assest/stream3.png'
import stream4 from './assest/stream4.png'

import './body.css'

function Stream(){
return(

    <div>
        <div className='test'>
              <img src={stream} alt='Z' className='image' />
                 <p>Stream</p>
        </div>
        <div className='test'>
              <img src={stream2} alt='Z' className='image' />
                 <p>Stream</p>
        </div>
        <div className='test'>
              <img src={stream3} alt='Z' className='image' />
                 <p>alarm</p>
        </div>
        <div className='test'>
              <img src={stream4} alt='Z' className='image' />
                 <p>alarm</p>
                 </div>
        
    </div>
)
}
export default Stream