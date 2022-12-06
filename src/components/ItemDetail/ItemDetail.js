

import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,nombre,img,description,price})=>{
  
    const handleOnAdd = (quanty)=>{
        console.log(`Se agrego al carrito ${quanty}`);
    }

    return(
        <div>
              
        <img src={img} alt={nombre} />   
        <h1>{nombre}</h1>  
        <p>{description}</p>  
        <h2>${price}</h2> 
        <ItemCount stock={10} onAdd={handleOnAdd}/>    
   </div>
    )
}

export default ItemDetail