const Products = [
  {
    id: "1",
    name: "Canon 1100D",
    price: 100,
    image: "camera.jpg",
    description: "Test descripotion",
  },
  {
    id: "2",
    name: "Computer",
    price: 150,
    image: "computer-set-1.jpg",
    description: "Test descripotion",
  },
  {
    id: "3",
    name: "Computer-2",
    price: 200,
    image: "computer-set-2.jpg",
    description: "Test descripotion",
  },
  {
    id: "4",
    name: "Hard disk",
    price: 80,
    image: "hard-disk.jpg",
    description: "Test descripotion",
  },
  {
    id: "5",
    name: "Keyboard",
    price: 50,
    image: "keyboard.jpeg",
    description: "Test descripotion",
  },
  {
    id: "6",
    name: "laptop",
    price: 120,
    image: "laptop.jpg",
    description: "Test descripotion",
  },
  {
    id: "7",
    name: "Mouse",
    price: 20,
    image: "mouse.jpg",
    description: "Test descripotion",
  },
  {
    id: "8",
    name: "Ram",
    price: 60,
    image: "ram.jpg",
    description: "Test descripotion",
  },
];

export function getProducts() {
  return Products;
}

export function getProduct(id) {
  return Products.find((item) => item.id === id);
}

export function getProductByName(name) {
  return Products.find((item) => item.name === name);
}
