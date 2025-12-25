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
  const [isGift, setIsGift] = useState(false);


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
      {isLoading ? (<Loader/>
      ):(
        product && 
        <>
        <ProductCard 
            product={product}
            flex = {true}
            renderDesc={true}
        />
         {/* ✅ Add checkbox RIGHT HERE */}
          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id="gift" />
          <label htmlFor="gift" style={{ marginLeft: '0.5rem' }}>
                <span>🎁 Marked as a gift</span>
              </label>
            </div>
          </>
        )}
    </LayOut>
  );
}

export default ProductDetail;
