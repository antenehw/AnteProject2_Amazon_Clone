import React, { useState, useEffect } from 'react';
import modularcss from './Results.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
console.log(res)

        setResults(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <h2 style={{ padding: '30px' }}>Category / {categoryName}</h2>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className={modularcss.products_container}>
            {results?.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
