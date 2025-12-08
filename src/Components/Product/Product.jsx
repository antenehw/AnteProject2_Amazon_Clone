import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import modularcss from './product.module.css';


function Product() {
    const [products, setProducts]= useState()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
        
        }, [])

return (
    <section className={modularcss.products_container}>
    {
        products?.map((singleProduct)=>{
        return  <ProductCard product={singleProduct} key={singleProduct.id}
            image={singleProduct.image}
            title={singleProduct.title}
            id={singleProduct.id}
            rating={singleProduct.rating}
            price={singleProduct.price}
        />
        })}
    </section>
);
}

export default Product;
