import React, { useState, useEffect } from 'react';
import modularcss from './ProductDetail.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${productUrl}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <LayOut>
      {isLoading ? (<Loader/>):(
        product && <ProductCard product={product}
        flex = {true}
        renderDesc={true}
        /> )}
    </LayOut>
  );
}

export default ProductDetail;
