<<<<<<< HEAD
import React, { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import modularcss from './cart.module.css'
import LayOut from "../../Components/LayOut/LayOut";
import { img } from "../../img/data";
=======
import React from 'react'
import modularcss from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'

>>>>>>> d07e829201cb0461a986a2950a0ed3ac7384a5ce

function Cart() {
  const [{ basket, user }] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);

  return (
    <LayOut>
<<<<<<< HEAD
      <section className={modularcss.container}>
        <div className={modularcss.cart__container}>
          <h2>Hello {user ? user.email : "Guest"}</h2>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p> <br/> Oops! No item in your cart! </p>
                      ) : (
            basket.map((item, id) => (
              <ProductCard
                key={id}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
                showCheckbox={true}
              />
            ))
          )}

          {basket?.length > 0 && (
            <div className={modularcss.subtotalBox}>
              <div className={modularcss.subtotal}>
                <p>Subtotal ({basket.length} items):</p>
                <CurrencyFormat amount={total} />
              </div>

              <div className={modularcss.giftOption}>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </div>

              <Link to="/payments" className={modularcss.checkoutBtn}>
                Continue to Checkout
              </Link>
            </div>

            
          )}
        </div>
      </section>
    </LayOut>
  );
=======

        <div>Cart</div>
    </LayOut>
     
    

  )
>>>>>>> d07e829201cb0461a986a2950a0ed3ac7384a5ce
}

export default Cart;
