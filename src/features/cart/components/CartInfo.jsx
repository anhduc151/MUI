import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../CartState";

const CartInfo = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div className="cart">
      <h2 className="cart_h2">Cart info </h2>
      <div className="cart_items">
        {cart.map((item) => (
          <p key={item.id} className="cart_title">
            {item.product.title}: {item.quantity}
          </p>
        ))}
      </div>
      <h4 className="cart_total">Total: {total} VND</h4>
    </div>
  );
};

export default CartInfo;
