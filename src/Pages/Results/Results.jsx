<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import modularcss from './Results.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
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
        <p style={{ padding: '30px' }}>Category / {categoryName}</p>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className={modularcss.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
=======
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
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774
