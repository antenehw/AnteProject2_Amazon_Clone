const products = [
  // Electronics
  {
    id: 1,
    title: "Smartphone XYZ",
    price: 499.99,
    categoryId: 1,
    categoryName: "electronics",
    rating: { rate: 4.5, count: 10 },
    img: "https://picsum.photos/200?1",
    description: "High quality smartphone with excellent camera"
  },
  {
    id: 2,
    title: "Laptop ABC",
    price: 899.99,
    categoryId: 1,
    categoryName: "electronics",
    rating: { rate: 4.7, count: 10 },
    img: "https://picsum.photos/200?2",
    description: "Powerful laptop for work and gaming"
  },

  // Jewelery
  {
    id: 3,
    title: "Gold Necklace",
    price: 199.99,
    categoryId: 2,
    categoryName: "jewelery",
    rating: { rate: 4.9, count: 10 },
    img: "https://picsum.photos/200?3",
    description: "Elegant gold necklace for special occasions"
  },

  // Men's clothing
  {
    id: 4,
    title: "Men's T-Shirt",
    price: 29.99,
    categoryId: 3,
    categoryName: "men's clothing",
    rating: { rate: 4.2, count: 10 },
    img: "https://picsum.photos/200?4",
    description: "Comfortable cotton t-shirt"
  },

  // Women's clothing
  {
    id: 5,
    title: "Women's Dress",
    price: 59.99,
    categoryId: 4,
    categoryName: "women's clothing",
    rating: { rate: 4.6, count: 10 },
    img: "https://picsum.photos/200?5",
    description: "Stylish dress for casual and party wear"
  }
];

export default products;
