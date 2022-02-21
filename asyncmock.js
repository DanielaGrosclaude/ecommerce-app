import mascarilla from './img/mascarilla.jpeg'
import serum from './img/serum.jpg'
import soap from './img/soap1.jpg'

const products = [
    {id: 1, name: "Mascarilla", price: 1500, description: 'Mascarilla', img: mascarilla },
    {id: 2, name: "Serum", price: 1000, description: 'sfa', img: serum },
    {id: 3, name: "soap", price: 2600, description: 'asdfs', img: soap }
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);      
    });
}

export const getProduct = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products[0]);
        }, 2000);      
    });
}

