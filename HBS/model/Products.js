// Lista de productos

const products = [
  {
    id: 1,
    name: "Pergamino",
    price: 323.45,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Spell_Scroll-512.png",
  },
  {
    id: 2,
    name: "Arco y Flecha",
    price: 234.56,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Bow_Arrow-512.png",
  },
  {
    id: 3,
    name: "Poción de amor",
    price: 45.67,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Potion-512.png",
  },
  {
    id: 4,
    name: "Mapa del destino",
    price: 456.78,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Adventure_Map-512.png",
  },
  {
    id: 5,
    name: "Armadura de plata",
    price: 67.89,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Armor-512.png",
  },
  {
    id: 6,
    name: "Guia de magia basica",
    price: 78.9,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Spell_Book-512.png",
  },
  {
    id: 7,
    name: "Espada",
    price: 456.78,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Sword-512.png",
  },
  {
    id: 8,
    name: "Huevo de dragon",
    price: 1000.87,
    image:
      "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Dragon_Egg-512.png",
  },
];

class Products {
  static lastProductId = products[products.length - 1].id;

  constructor() {
    this.list = products;
  }

  getAll() {
    return this.list;
  }

  getById(productId) {
    return this.list.find((product) => product.id === +productId);
  }

  save(product) {
    const { name, price, image } = product;
    if (!name || !price || !image) {
      return null;
    }
    Products.lastProductId++;
    const newProduct = {
      id: Products.lastProductId,
      name,
      price,
      image,
    };
    this.list.push(newProduct);
    return newProduct;
  }

  updateById(productId, product) {
    const productIndex = this.list.findIndex(
      (producto) => producto.id === +productId
    );
    if (productIndex < 0) return null;
    const { name, price, image } = product;
    const updatedProduct = {
      id: this.list[productIndex].id,
      name,
      price,
      image,
    };
    this.list[productIndex] = updatedProduct;
    return updatedProduct;
  }

  deleteById(productId) {
    const productIndex = this.list.findIndex(
      (producto) => producto.id === +productId
    );
    if (productIndex < 0) return null;
    return this.list.splice(productIndex, 1);
  }
}

module.exports = products;

module.exports = Products;
