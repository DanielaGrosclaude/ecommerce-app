import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from 'react'
import { Button, Card} from 'react-bootstrap';
import './ItemCount.css';


function ItemCount () { 

    const [count, setCount] = useState (0)
    
    const decrement =()=> {
        if (count > 0){
            setCount(count - 1)
        }
    }
       
    const [fechaYHora, setFechaYHora ] = useState (Date) 


    const handleCount =()=>{

        setCount(count+1)
        if (count >= 5){
            alert('Sin stock :(')
            setCount(0)
        }

        
        //setDecount(count-1)
        setFechaYHora(Date)

 } 


 useEffect(()=>{ //segunda instancia
     //accion llamada a api para que no demore mucho tiempo.
    console.log('llamada a api 2, una sola vez')   
 }, [fechaYHora]) //esto hace que se ejecute una sola vez 


    return (
        <div className ="cardsProduct" >
            <Card style={{ width: '18rem'}}>
           
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                Lorem ipsum dolor
                </Card.Text>
            </Card.Body>
            <Button variant="outline-success" onClick={handleCount}class='btn'>+</Button>{''} 
            {count}
            <Button variant="outline-danger" onClick={decrement}class='btn'>-</Button>{' '}
            </Card>

            <Card style={{ width: '18rem', height: '100%'}}>
         
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                Lorem ipsum dolor
                </Card.Text>
            </Card.Body>
            <Button variant="outline-success" onClick={handleCount} class='btn'>+</Button>{''} 
            {count}
            <Button variant="outline-danger" onClick={decrement}class='btn'>-</Button>{' '}
            </Card>
            
            <Card style={{ width: '18rem', height: '100%'}}>
         
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                Lorem ipsum dolor
                </Card.Text>
            </Card.Body>
            <Button variant="outline-success" onClick={handleCount} class='btn'>+</Button>{''} 
            {count}
            <Button variant="outline-danger" onClick={decrement}class='btn'>-</Button>{' '}
            </Card>
            <br/> 
           
            
            
           
        </div>
        )
}
export default ItemCount