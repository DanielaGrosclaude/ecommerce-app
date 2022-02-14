export const products = [

    { 
        id: 1,
        name: 'jabones',
        stock: 4,
        price: 400,
        img: "./soap1.png",
        category: 'skincare',   

    },

    {
    id: 2,
    name: 'mascarilla',
    stock: 5,
    price: 1500,
    img: "./mascarilla.jpeg",
    category: 'skincare',  
    },

    {
        id: 3,
        name: 'serum',
        stock: 7,
        price: 2400,
        img: "./serum.jpeg",
        category: 'skincare',  
        }
];

console.log(products);

export const traerProductos = new Promise((resolve, reject)=>{
    setTimeout (()=> {
        resolve(products);
    }, 2000);
});

