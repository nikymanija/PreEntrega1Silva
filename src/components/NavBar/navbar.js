import '../NavBar/navbar.css'
import logo from '/images/federacion.jpg' 
import Button from '../Button/button'
const NavCont = (props) =>{
   
    return(
   
    <nav className="navegador">
        <div className='logo'> <img src={logo}/></div>
      
        <Button text='Home' colorText='red'>Home</Button> 
        <Button text='Products' colorText='red'>Products</Button> 
        <Button colorText='red' backgroundText='blue'>Contact</Button> 
    </nav>)

}

export default NavCont