import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState } from "../ProductState";
import { addToCart, cartState } from "../CartState";

const ProductList = () => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };
  return (
    <div className="list">
      <h2 className="list_h2">Product List</h2>
      <div className="product_list">
        {productList.map((product) => (
          <p key={product.id} className="product_list_li">
            {product.title}
            <button
              onClick={() => handleAddToCart(product)}
              className="list_btn"
            >
              Add to cart
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
