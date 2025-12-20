// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Pages
// import Landing from './Pages/Landing/Landing';
// import SignUp from './Pages/Auth/SignUp';
// import Orders from './Pages/Orders/Orders';
// import Payment from './Pages/payment/Payment';
// import Cart from './Pages/Cart/Cart';

// function Routing() {
//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/auth" element={<SignUp />} />
//       <Route path="/payment" element={<Payment />} />
//       <Route path="/orders" element={<Orders />} />
//       <Route path="/cart" element={<Cart />} />
//       {/* future category/product routes */}
//       <Route path="*" element={<h2>Page not found</h2>} />
//     </Routes>
//   );
// }

// export default Routing;


import React from 'react'

import Header from "./Components/Header/Header.jsx";
import Category from "./Components/Category/Category.jsx";
import Product from "./Components/Product/Product.jsx";
import CarouselEffect from "./Components/Carousel/CarouselEffect.jsx";

function App() {
  return (
    <>
      <Header/>
      <CarouselEffect/>
      <Category/>
      <Product/>
    </>
  );
}

export default App;