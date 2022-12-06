import { useState,useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import '../ItemDetailContainer/ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ()=>{

    const [products,setProduct] = useState({})

    const { productId } = useParams()

    useEffect(()=>{
        getProductsById(productId)
        .then(response =>{
            setProduct(response)
        })
        .catch(e=>console.log(`no se pudo obtener el detalle ${e}`))
    }, [productId])


 

    return(
        <div className="ItemDetailContainer">
            <h1>Products Detail</h1>

        <ItemDetail {...products} />

        </div>
    )
}

export default ItemDetailContainer