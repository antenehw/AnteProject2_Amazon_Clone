<<<<<<< HEAD
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
=======
// import React from 'react'
// import modularcss from './ProductDetail.module.css'
// import Layout from '../../Components/LayOut/LayOut'
// import axios from 'axios'
// import {useParams} from 'react-router-dom'
// import {productUrl} from '../../Api/endpoints'
// import productcard from '../../Components/ProductCard/ProductCard'


// function ProductDetail() {
//   const [product, setProduct] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const {productId} = useParams();

//   useEffect(() => {
//         setLoading(true);
//     axios.get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err)
        
//       })
//     }, [productId]);

//   return (
//     <LayOut>
//       {isLoading ? (<Loader/>) :(<productcard product={product} 
//       />)}
//       </LayOut>
      
//   )
// }

// export default ProductDetail;
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774
