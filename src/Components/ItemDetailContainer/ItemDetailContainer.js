
import { useEffect, useState } from "react";
import  Spinner  from '../Spinner/Spinner';
import { useParams } from "react-router-dom";
import { getProduct } from "../Asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const { productId } = useParams()
  const [loading, setLoading] =  useState( true)
  
console.log(productId)
  useEffect(() => {
      getProduct(productId).then(item => {
          setProduct(item)
          console.log(item)
      }).catch(err  => {
          console.log(err)
      }).finally(()=> {setLoading (false) } )

      return (() => {
          setProduct()
      })

  }, [productId])


  return (
      <div>
          {loading? <Spinner/> : <ItemDetail product = {product}  />}

      </div>
  )    
}
export default ItemDetailContainer