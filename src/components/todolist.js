import todolist from './assest/todolist.png'
import todolist2 from './assest/todolist2.png'
import todolist3 from './assest/todolist3.png'
import todolist4 from './assest/todolist4.png'
import './body.css'
function TodoList(){
    return(

        <div className='test' >
           
            <div>
                 <img src={todolist} alt='Z' className='image' />
                 <p>this is amazing</p>
            </div>
            <div>
                <img src={todolist2} alt='zz' className='image'/>
                <p>wow!</p>
            </div>

            <div>
            <img src={todolist3} alt='zzz' className='image'/>
            <p>aiiii</p>
            </div>
            <div>
            <img src={todolist4} alt='Zzzz' className='image' />
                 <p>this is amazing</p>
            </div>
        </div>
    )
}
export default TodoList