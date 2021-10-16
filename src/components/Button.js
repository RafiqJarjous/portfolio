import Link from 'react-router-dom'
import './Button.css'


const STYLES = ['btn--primary' , 'btn--outline']
const STYLES = ['btn--medium' , 'btn--large']
export default Button = ({


    onClick,
    type,
    children,
    buttonStyle,
    buttonSize




}) =>{


    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
}
<Link >
<button className={'btn ${checkButtonStyle} ${checkButtonSize}'}      onClick={onClick} type={type}   >{children}</button>

 </Link>












navOpenClose : 
const [navState , setNavState] = useState(false)


