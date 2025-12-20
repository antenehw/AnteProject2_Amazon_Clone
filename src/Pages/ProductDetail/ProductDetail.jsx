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
