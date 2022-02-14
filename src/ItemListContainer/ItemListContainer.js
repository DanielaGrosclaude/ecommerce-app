import React from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import { products, traerProductos } from '../Products/Products'
import { useEffect, useState } from 'react';

function ItemListContainer ({greeting}){ 

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return(
        <div>
            <h2 className='greeting'>
            {greeting}
            </h2>
            <ItemList products={products}/>
            
         </div>
        
    )
  
    
}


export default ItemListContainer