import { getProducts,getProductsByCategory} from '../../asyncMock'

import {useState,useEffect} from 'react'

import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ()=>{

    const [products,setProducts]= useState([])

    const {categoryId} = useParams()
    useEffect(()=>{
        
        if(categoryId){
            getProductsByCategory(categoryId)
            .then(resolve=>{
                    return(
                       setProducts(resolve)
                    )
                })
                .catch(err=>console.log(`hay un error ${err}`)) 

        }else {
            getProducts()
            .then(resolve=>{
                    
                return(
                    setProducts(resolve)
                 )
                    
                })
                .catch(err=>console.log(`hay un error ${err}`)) 
        }

      
    },[categoryId])
  
    return( 
        <div className='ItemListContainer'>
         <h2> {  categoryId  ||'all'} {'drone'}</h2>   

               <ItemList products={products}/> 
               
        </div>
    )
}

export default ItemListContainer