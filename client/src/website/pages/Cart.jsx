import React, { useState, useContext, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { CartContext } from "../../contextApi/CartContext";
import { RxCross2 } from "react-icons/rx";
const API_URL = import.meta.env.VITE_Node_Api_Url;
const Cart = () => {
  const {
    cart,
    loading,
    fetchCart,
    updateCartItem,
    removeCartItem,
  } = useContext(CartContext);

  const [selectedShipping, setSelectedShipping] = useState(2);

  // Fetch cart when the component mounts
  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = (productId, change, currentQuantity) => {
    const newQuantity = Math.max(1, currentQuantity + change);
    updateCartItem(productId, newQuantity);
  };

  const subtotal = cart.items?.reduce(
    (total, item) => total + item.productId.price * item.quantity,
    0
  ) || 0;

  const shippingOptions = [
    { label: " Flat Rate: $5.00", value: 5 },
    { label: " Free Shipping", value: 0 },
    { label: " Flat Rate: $10.00", value: 10 },
    { label: " Local Delivery: $2.00", value: 2 },
  ];

  const total = subtotal + selectedShipping;

  return (
    <>
      <HeroSection title="Cart Page" />

      {loading ? (
        <p>Loading cart...</p>
      ) : (
        <section className="cart-section">
          {cart.items?.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item, index) => (

                    <tr key={index}>
                      <td className="cart-product">
                        {console.log(item.productId.image)}
                        <img
                          src={`${API_URL}${item.productId.image}`}
                          alt={item.productId.name}
                        // style={{ width: "50px" }}
                        />
                        <span>{item.productId.name}</span>
                      </td>
                      <td className="price">
                        ${item.productId.price}
                      </td>
                      <td>
                        <div className="quantity-control">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.productId._id,
                                -1,
                                item.quantity
                              )
                            }
                          >
                            -
                          </button>
                          <input type="text" value={item.quantity} readOnly />
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.productId._id,
                                1,
                                item.quantity
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="total">
                        ${(item.productId.price * item.quantity)}
                      </td>
                      <td>
                        <button className="cursor-pointer"
                          onClick={() => removeCartItem(item.productId._id)}
                        >
                          <RxCross2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <br />

              <div className="cart-totals">
                <div className="cart-total-item">
                  <span>Subtotal: </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="cart-total-item">
                  <span>Shipping</span>
                  <div className="shipping-options">
                    {shippingOptions.map((option, idx) => (
                      <label key={idx}>
                        <input
                          type="radio"
                          name="shipping"
                          checked={selectedShipping === option.value}
                          onChange={() => setSelectedShipping(option.value)}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="cart-total-item total">
                  <strong>Total: </strong>
                  <strong>${total}</strong>
                </div>

                {/* <div className="cart-actions">
                  <button className="continue-btn">Continue Shopping</button>
                  <button className="checkout-btn">Proceed to Checkout</button>
                </div> */}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default Cart;
