import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header.jsx";
import CarouselEffect from "./Components/Carousel/CarouselEffect.jsx";
import Product from "./Components/Product/Product.jsx";
import Category from "./Components/Category/Category.jsx";
import CategoryProducts from "./Components/Category/CategoryProducts.jsx";
import CategoryFullinfos from "./Components/Category/CategoryFullinfos.jsx";

// Data
import categories from "./data/categories";
import products from "./data/products";

// Banner images for carousel
const bannerImages = [
  "https://picsum.photos/1500/500?1",
  "https://picsum.photos/1500/500?2",
  "https://picsum.photos/1500/500?3",
];

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={
            <>
              <CarouselEffect img={bannerImages} />
              <Category categories={categories} />
              <Product /> {/* Optional: could show featured products */}
            </>
          }
        />

        {/* All Categories */}
        <Route path="/category" element={<Category categories={categories} />} />

        {/* Products inside one category */}
        <Route path="/category/:categoryId"
          element={<CategoryProducts products={products} categories={categories} />}
        />

        {/* Full info about one product */}
        <Route path="/category/:categoryId/product/:productId"
          element={<CategoryFullinfos products={products} />}
        />

        {/* Fallback */}
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
