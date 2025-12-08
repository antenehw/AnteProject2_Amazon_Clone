import React from 'react'
import Rating from "@mui/material/Rating"
import modularcss from './Product.module.css';
import CurrencyFormat from '../currencyFormat/CurrencyFormat'


function ProductCard(Product) {
    const { img, title, id, rating, price }  = Product;
    
    return (
    <div className={`${modularcss.card_container}`}>
    <a href=''>
        <img src={img} alt={title} />
    </a>
    <div>
        <h3> {title} </h3>
                <div className={modularcss.rating}>
            {/* rating */}
            <Rating value={rating.rate} precision={0.1}/>

            {/* count */}
            <small>{rating.count}</small>

        </div>
    </div>
    <div className={modularcss.price}>
        {/* price */}
        <CurrencyFormat amount={price}/>
    </div>

    <button className={modularcss.button}>
        add to cart
    </button>
    </div>
)

}

export default ProductCard;
