const products = [
  {
    id: 1,
    name: "Serum",
    img: "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500",
    description: "Antioxidante, ilumina y reduce hiperpigmentación",
    price: 5600,
    category: "humectacion",
    stock: 4
  },
  {
    id: 2,
    name: "Mascarilla",
    img: "https://images.pexels.com/photos/3851905/pexels-photo-3851905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Mascarilla de tela skin active manzanilla",
    price: 502,
    category: "humectacion",
    stock: 1
  },
  {
    id: 3,
    name: "Contorno de Ojos",
    img: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Con ácido hialurónico. Preserva la tonicidad, elasticidad y flexibilidad de la piel",
    price: 1700,
    category: "humectacion",
    stock: 12
  },
  {
    id: 4,
    name: "Tónico",
    img: "https://images.pexels.com/photos/8131585/pexels-photo-8131585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Tónico de limpieza adaptado a todo tipo de piel, incluso a pieles sensibles",
    price: 3700,
    category: "limpieza",
    stock: 4
  },
  {
    id: 5,
    name: "Aceite con Vitamina E",
    img: "https://images.pexels.com/photos/8131581/pexels-photo-8131581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Antioxidante para ayudar a hidratar la piel seca y áspera",
    price: 2000,
    category: "relax",
    stock: 6
  },
  {
    id: 6,
    name: "Aceite de Menta",
    img: "https://images.pexels.com/photos/8140916/pexels-photo-8140916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: " Ayuda a reducir el estrés y aliviar las tensiones.",
    price: 3500,
    category: "relax",
    stock: 5
  },
  {
    id: 7,
    name: "Mascarilla Detox",
    img: "https://images.pexels.com/photos/3762565/pexels-photo-3762565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Mascarilla negra tela pure carbón detox",
    price: 700,
    category: "limpieza",
    stock: 18
  },
  {
    id: 8,
    name: "Product 8",
    img: "https://images.pexels.com/photos/8140907/pexels-photo-8140907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 8",
    price: 8.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 9,
    name: "Product 9",
    img: "https://images.pexels.com/photos/6706901/pexels-photo-6706901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 9",
    price: 9.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 10,
    name: "Product 10",
    img: "https://images.pexels.com/photos/5069388/pexels-photo-5069388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 10",
    price: 10.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 11,
    name: "Product 11",
    img: "https://images.pexels.com/photos/5217926/pexels-photo-5217926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 11",
    price: 11.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 12,
    name: "Product 12",
    img: "https://images.pexels.com/photos/6978040/pexels-photo-6978040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 12",
    price: 12.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 13,
    name: "Product 13",
    img: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 13",
    price: 13.99,
    category: "vestidos",
    stock: 6
  },
  {
    id: 14,
    name: "Product 14",
    img: "https://images.pexels.com/photos/8140914/pexels-photo-8140914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 14",
    price: 14.99,
    category: "vestidos",
    stock: 6
  },
  {
    id: 15,
    name: "Product 15",
    img: "https://images.pexels.com/photos/8131574/pexels-photo-8131574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 15",
    price: 15.99,
    category: "remeras",
    stock: 6
  },
  {
    id: 16,
    name: "Product 16",
    img: "https://images.pexels.com/photos/4155450/pexels-photo-4155450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Description 16",
    price: 16.99,
    category: "vestidos",
    stock: 6
  },
];

// filter

const categorias = [
  {
    id: "",
    description: "Todo",
  },
  {
    id: "humectacion",
    description: "Humectación",
  },
  {
    id: "limpieza",
    description: "Limpieza",
  },
  {
    id: "relax",
    description: "Relax",
  },
];

// Return categories list
export const getCategorias = () => {
  return categorias;
};


// Return products list
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

// Retorna producto segun categoria
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    const productsToResolve = products.filter(
      (item) => item.category === categoryId
    );
    resolve(productsToResolve);
  });
};
