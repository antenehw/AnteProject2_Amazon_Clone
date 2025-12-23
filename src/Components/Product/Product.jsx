import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import modularcss from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      const normalizedProducts = res.data.map((p) => ({
        ...p,
        img: p.image, 
      }));

      setProducts(normalizedProducts);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={modularcss.products_container}>
          {products?.map((singleproduct) => (
            <ProductCard product={singleproduct} key={singleproduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
