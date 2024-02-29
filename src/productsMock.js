export let products = [
  {
    id: 1,
    name: "Lapras Plushie",
    size: "22''",
    category: "plushie",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 12.99,
    img: "src/components/common/productcard/img/lapras-plushie-background.png",
  },

  {
    id: 2,
    name: "Celebi Plushie",
    size: "22''",
    category: "plushie",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 10,
    img: "src/components/common/productcard/img/celebi-plushie-background.png",
  },

  {
    id: 3,
    name: "Charizard Plushie",
    size: "22''",
    category: "plushie",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 11.99,
    img: "src/components/common/productcard/img/charizard-plushie-background.png",
  },

  {
    id: 4,
    name: "Psyduck Plushie",
    size: "22''",
    category: "plushie",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: 11.99,
    img: "src/components/common/productcard/img/psyduck-plushie-background.png",
  },
];

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
