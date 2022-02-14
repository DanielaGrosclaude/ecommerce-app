import './Item.css';

const Item = ({product}) => {

    return (
        <div className="products">
            <h1 className="text">{product.name}</h1>
            <img src={product}/>
            
        </div>
    )
}

export default Item