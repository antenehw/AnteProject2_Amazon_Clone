// import React, { useEffect } from 'react';
// import modularcss from './Results.module.css';
// import Layout from '../../Components/LayOut/LayOut';
// import products from '../../data/products';
// import ProductCard from '../../Components/Product/ProductCard';
// import {useParams} from 'react-router-dom';
// import axios from 'axios';


// function Results() {
//     const [results, setResults]= useState([]);
//     const {categoryName}= useParams()

// useEffect(() => {
//     axios.get(`${productUrl}/products/category/${categoryName}`)
// .then((res)=>{
//    setResults(res.data)
//    console.log(res.data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// }, [categoryName])

// return (
// <LayOut>
//     <section>
//     <h1 style={{ padding:"30px"}}>Results</h1>
//     <p style={{padding:"30Px"}}>category/{categoryName}</p>
//     <hr/>
   
//         <div className={Classes.products_container}>

//             {results?.map((product)=>(
//                 <ProductCard 
//                 key={products.id}
//                 product={product}
//                 />
//             ))}
//         </div>
    
//     </section>
// </LayOut>
// )
// }

// export default Results
