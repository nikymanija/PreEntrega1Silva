import '../NavBar/navbar.css'
import '../CartWidget/cartwidget.css'
import logo from '../../assets/logodronefinal.png' 
import Button from '../Button/button'
import CartWidget from '../CartWidget/cartwidget'
const NavCont = (props) =>{
   
    const clickHome = ()=>{
        alert('This is the Home')
    }

    const clickAlldrones = ()=>{
        alert('Choose the drone that you like the most')
    }

    const clickContact = ()=>{
        alert('Send your query')
    }

    return(
   
    <nav className="navegador">
        <div className='logo'> <img src={logo}/></div>
       
        <Button colorText='black' backgroundText='#F24B08' accion={clickHome}>HOME</Button> 
        <Button colorText='black' backgroundText='#F24B08' accion={clickAlldrones}>ALL DRONES</Button> 
        <Button colorText='black' backgroundText='#F24B08' accion={clickContact}>CONTACT</Button> 
        <div className='carrito'> <CartWidget/> </div>
    </nav>)

}

export default NavCont