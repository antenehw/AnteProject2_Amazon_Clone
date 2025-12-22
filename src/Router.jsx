import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/payment/Payment";
import Cart from "./Pages/Cart/Cart";
import Account from "./Pages/Auth/Account";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default Routing;


