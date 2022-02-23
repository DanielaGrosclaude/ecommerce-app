const products = [
  {
    id: 1,
    name: "Serum",
    img: "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500",
    description: "Antioxidante, ilumina y reduce hiperpigmentación.",
    price: 5600,
    category: "humectacion",
    stock: 4
  },
  {
    id: 2,
    name: "Mascarilla",
    img: "https://images.pexels.com/photos/3851905/pexels-photo-3851905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Mascarilla de tela skin active manzanilla.",
    price: 502,
    category: "humectacion",
    stock: 1
  },
  {
    id: 3,
    name: "Contorno de Ojos",
    img: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Con ácido hialurónico. Preserva la tonicidad y flexibilidad de la piel.",
    price: 1700,
    category: "humectacion",
    stock: 12
  },
  {
    id: 4,
    name: "Tónico",
    img: "https://images.pexels.com/photos/8131585/pexels-photo-8131585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Tónico de limpieza adaptado a todo tipo de piel, incluso a pieles sensibles.",
    price: 3700,
    category: "limpieza",
    stock: 4
  },
  {
    id: 5,
    name: "Aceite con Vitamina E",
    img: "https://images.pexels.com/photos/8131581/pexels-photo-8131581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Antioxidante para ayudar a hidratar la piel seca y áspera.",
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
    description: "Mascarilla negra tela pure carbón detox.",
    price: 700,
    category: "limpieza",
    stock: 18
  },
  {
    id: 8,
    name: "Masajeador Jade",
    img: "https://images.pexels.com/photos/8140907/pexels-photo-8140907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Promueve la circulación e integra la energía natural.",
    price: 999,
    category: "relax",
    stock: 6
  },
  {
    id: 9,
    name: "Serum Vitamina A",
    img: "https://images.pexels.com/photos/6706901/pexels-photo-6706901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Retinol. Estimula la renovación celular.",
    price: 6000,
    category: "hidratacion",
    stock: 6
  },
  {
    id: 10,
    name: "Serum Vitamina E y C",
    img: "https://images.pexels.com/photos/5069388/pexels-photo-5069388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Propiedades antioxidantes, mejora signos de envejecimiento.",
    price: 5000,
    category: "hidratacion",
    stock: 6
  },
  {
    id: 11,
    name: "Crema para rostro",
    img: "https://images.pexels.com/photos/5217926/pexels-photo-5217926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Crema para piel sensible.",
    price: 1050,
    category: "hidratacion",
    stock: 6
  },
  {
    id: 12,
    name: "Mascarilla Aloe",
    img: "https://images.pexels.com/photos/6978040/pexels-photo-6978040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Mascarilla facial con aloe vera.",
    price: 500,
    category: "limpieza",
    stock: 55
  },
  {
    id: 13,
    name: "Crema Pies",
    img: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Humecta y tranquiliza intensivamente la piel seca.",
    price: 1400,
    category: "hidratacion",
    stock: 4
  },
  {
    id: 14,
    name: "Crema Manos",
    img: "https://images.pexels.com/photos/8140914/pexels-photo-8140914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: " Acción anti-resequedad. Con Vitamina B3.",
    price: 600,
    category: "hidratacion",
    stock: 6
  },
  {
    id: 15,
    name: "Agua Micelar",
    img: "https://images.pexels.com/photos/8131574/pexels-photo-8131574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Micelas con Aceite de Argán.",
    price: 600,
    category: "limpieza",
    stock: 6
  },
  {
    id: 16,
    name: "Bomba de baño",
    img: "https://images.pexels.com/photos/4155450/pexels-photo-4155450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Bomba de carbón activo con propiedades antibacteriana.",
    price: 500,
    category: "relax",
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
