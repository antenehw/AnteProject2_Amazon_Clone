import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Product from "./Components/Product/Product.jsx";
import CarouselComponent from './Components/Carousel/CarouselComponent.jsx';


// Example images for carousel
const bannerImages = [
  "https://picsum.photos/1500/500?1",
  "https://picsum.photos/1500/500?2",
  "https://picsum.photos/1500/500?3",
];

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <CarouselComponent img={bannerImages} />
              <Product />
            </>
          }
        />

        {/* Checkout Page */}
        <Route path="/checkout" element={<h1>Checkout Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
