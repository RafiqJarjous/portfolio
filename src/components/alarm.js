import alarm from './assest/alarm.png'
import alarm2 from './assest/alarm2.png'
import alarm3 from './assest/alarm3.png'
import './body.css'

function Alarm(){
    return(

        <div>
            <div className='test'>
              <img src={alarm} alt='Z' className='image' />
                 <p>alarm</p>
                     </div>
            <div className='ren'>
              <img src={alarm2} alt='Z' className='image' />
                 <p>alarm2</p>
              </div>
              <div className='ren'>
              <img src={alarm3} alt='Zzzz' className='image' />
                 <p>alarm3</p>
        </div>
        </div>
    )
}
export default Alarm