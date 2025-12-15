import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import modularcss from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // Normalize API data to match your app structure
        const normalizedProducts = res.data.map((p) => ({
          ...p,
          img: p.image, // ✅ matches ProductCard
        }));

        setProducts(normalizedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className={modularcss.status}>Loading products...</p>;
  }

  if (error) {
    return <p className={modularcss.status}>{error}</p>;
  }

  return (
    <section className={modularcss.products_container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Product;
