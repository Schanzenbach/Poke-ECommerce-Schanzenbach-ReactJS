export let products = [
  {
    id: 1,
    name: "Lapras Plushie",
    size: "22''",
    category: "plushies",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 12.99,
    img: "https://res.cloudinary.com/dxt6aalyt/image/upload/v1709689944/PokeProject/r1qtxujifp4vpd8fojta.png",
  },

  {
    id: 2,
    name: "Celebi Plushie",
    size: "22''",
    category: "plushies",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 10,
    img: "/img/celebi-plushie-background.png",
  },

  {
    id: 3,
    name: "Charizard Plushie",
    size: "22''",
    category: "plushies",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 11.99,
    img: "/img/charizard-plushie-background.png",
  },

  {
    id: 4,
    name: "Psyduck Plushie",
    size: "22''",
    category: "plushies",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 11.99,
    img: "/img/psyduck-plushie-background.png",
  },

  {
    id: 5,
    name: "Pikachu Blue Lightning Shirt - Men",
    size: "S/M/L",
    category: "clothes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 22.99,
    img: "/img/remera1.jpg",
  },

  {
    id: 6,
    name: "Pikachu, Shiinotic & Friends Pokémon Nature: Fall Black Relaxed Fit Crew Neck T-Shirt - Adult",
    size: "S/M/L",
    category: "clothes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 22.99,
    img: "/img/remera3.jpg",
  },

  {
    id: 7,
    name: "Pikachu & Friends Pokémon Sweet Temptations Blue Relaxed Fit Crew Neck T-Shirt - Adult",
    size: "L",
    category: "clothes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 11.99,
    img: "/img/remera4.jpg",
  },

  {
    id: 8,
    name: "Growlithe Pokémon Home Accents Throw Pillow Covers (2-Pack)",
    size: "default",
    category: "home",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 39.99,
    img: "/img/growlithe-pillow.jpg",
  },

  {
    id: 9,
    name: "Wooloo Pokémon Home Accents Throw Pillow Covers",
    size: "default",
    category: "home",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 200,
    img: "/img/Wololo.jpg",
  },

  {
    id: 10,
    name: "Pokémon Chess Set",
    size: "default",
    category: "home",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: 10,
    price: 200,
    img: "/img/pokechess.jpg",
  },

  {
    id: 11,
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
