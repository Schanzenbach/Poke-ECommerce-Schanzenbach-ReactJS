export let products = [
  {
    name: "Celebi Plushie",
    size: "22''",
    category: "plushies",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 10,
    img: "/img/celebi-plushie-background.png",
  },

  {
    name: "Charizard Plushie",
    size: "22''",
    category: "plushies",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 11.99,
    img: "/img/charizard-plushie-background.png",
  },

  {
    name: "Psyduck Plushie",
    size: "22''",
    category: "plushies",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 11.99,
    img: "/img/psyduck-plushie-background.png",
  },

  {
    name: "Pikachu, Shiinotic & Friends Pokémon Nature: Fall Black Relaxed Fit Crew Neck T-Shirt - Adult",
    size: "S/M/L",
    category: "clothes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 22.99,
    img: "/img/remera3.jpg",
  },

  {
    name: "Pikachu & Friends Pokémon Sweet Temptations Blue Relaxed Fit Crew Neck T-Shirt - Adult",
    size: "L",
    category: "clothes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 11.99,
    img: "/img/remera4.jpg",
  },

  {
    name: "Growlithe Pokémon Home Accents Throw Pillow Covers (2-Pack)",
    size: "default",
    category: "home",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 39.99,
    img: "/img/growlithe-pillow.jpg",
  },

  {
    name: "Wooloo Pokémon Home Accents Throw Pillow Covers",
    size: "default",
    category: "home",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 200,
    img: "/img/Wololo.jpg",
  },

  {
    name: "Slumbering Snorlax Bookends",
    size: "default",
    category: "home",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 49.99,
    img: "/img/snorlax-book-holder.jpg",
  },
];

//Función para fetchear mis propios productos xd

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("Error, productos no encontrados.");
    }
  });
};

//Función que me busca en el array de productos uno cuyo product.id sea el mismo que el id que le paso por argumento
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);
      //Voy a simular que demora con un setTimeOut
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto de id ${id}`);
        }
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
