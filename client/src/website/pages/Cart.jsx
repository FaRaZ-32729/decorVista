import React, { useState } from "react";
import HeroSection from '../components/HeroSection'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      img: "assets/images/feature_1.png",
      name: "Minimalistic shop for multipurpose use",
      price: 360,
      quantity: 1,
    },
    {
      img: "assets/images/feature_2.png",
      name: "Modern wooden chair",
      price: 240,
      quantity: 1,
    },
    {
      img: "assets/images/feature_3.png",
      name: "Decorative lamp",
      price: 120,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (index, change) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingOptions = [
    { label: " Flat Rate: $5.00", value: 5 },
    { label: " Free Shipping", value: 0 },
    { label: " Flat Rate: $10.00", value: 10 },
    { label: " Local Delivery: $2.00", value: 2 },
  ];

  const [selectedShipping, setSelectedShipping] = useState(2);

  const total = subtotal + selectedShipping;

  return (
    <>
      <HeroSection title={"Cart Page"} />

      <section className="cart-section">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="cart-product">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td className="price">${item.price.toFixed(2)}</td>
                <td>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(index, -1)}>
                      -
                    </button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => handleQuantityChange(index, 1)}>
                      +
                    </button>
                  </div>
                </td>
                <td className="total">
                  ${(item.price * item.quantity).toFixed(2)}
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

          <div className="shipping-calculator">
            <select>
              <option>Pakistan</option>
              <option>Bangladesh</option>
              <option>India</option>
            </select>
            <select>
              <option>Select a State</option>
              <option>State 1</option>
              <option>State 2</option>
            </select>
            <input type="text" placeholder="Postcode/Zipcode" />
            <button className="update-btn">Update Details</button>
          </div>

          <div className="cart-total-item total">
            <strong>Total: </strong>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <div className="cart-actions">
            <button className="continue-btn">Continue Shopping</button>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
