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
<<<<<<< HEAD
        setProducts(res.data);
=======
        
        const normalizedProducts = res.data.map((p) => ({
          ...p,
          img: p.image, 
        }));

        setProducts(normalizedProducts);
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774
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
