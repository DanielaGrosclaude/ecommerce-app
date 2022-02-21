import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { IoMdReturnLeft } from 'react-icons/io'
import { FaMedal } from 'react-icons/fa'



export const ItemDetail = ({product}) => {

    const onAdd = (count) => {
        if(count > 1){
        console.log(`Se agregaron ${count} articulos al carrito`);
        } else {
            console.log(`Se agrego ${count} articulo al carrito`);
        }
    }

    return(
        <>
            <div className="container">
                <div className="card">
                    <img className="image" src={product.img} alt={product.name}/>

                    <div className="product-details">
                        <h3>{product.name}</h3>

                        <p>{product.description}</p>

                        <p><strong>Color:</strong> Grafito</p>

                        <h2 className="price"><span><del>ARS {product.price + 1500}</del></span> ARS {product.price}</h2>
                

                        <ItemCount stock={ 15 } initial={ 1 } onAdd={ onAdd }/>


                        <div className="guaranteed">
                            <p><span className="beneficios"><IoMdReturnLeft/> Devolucion gratis.</span> </p>
                            
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );

}


