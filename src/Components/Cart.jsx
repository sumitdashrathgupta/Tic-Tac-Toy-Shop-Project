import React, { useState, useEffect } from "react";
import Products_Item from "../assets/Products_Item";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCartCount } from "../redux/Slice";
import "../Style/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  let { Cartid } = useParams();

  useEffect(() => {
    if (Cartid && Products_Item[Cartid]) {
      const selectedProduct = {
        ...Products_Item[Cartid],
        quantity: 1,
        discount: 100,
      };
      setProducts((prevProducts) => {
        const existingProduct = prevProducts.find(
          (item) => item.id === selectedProduct.id
        );
        if (existingProduct) return prevProducts;
        const updatedCart = [...prevProducts, selectedProduct];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        dispatch(updateCartCount(updatedCart.length));
        return updatedCart;
      });
    }
  }, [Cartid, dispatch]);

  const updateCart = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
    dispatch(updateCartCount(updatedProducts.length));
  };

  const incrementQuantity = (id) => {
    const updatedProducts = products.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedProducts);
  };

  const decrementQuantity = (id) => {
    const updatedProducts = products
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedProducts);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    updateCart(updatedProducts);
  };

  const calculatePriceDetails = () => {
    let totalPrice = 0;
    let totalDiscount = 0;

    products.forEach((item) => {
      totalPrice += item.Price * item.quantity;
      totalDiscount += (item.discount || 0) * item.quantity;
    });

    return {
      totalPrice,
      totalDiscount,
      finalAmount: totalPrice - totalDiscount,
    };
  };

  const { totalPrice, totalDiscount, finalAmount } = calculatePriceDetails();

  return (
    <div className="cart-container">
      <div className="cart-items">
        {products.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          products.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="cart-img" src={item.Image} alt={item.Title} />
              <div className="cart-details">
                <h3>{item.Title2}</h3>
                <h4>{item.Title}</h4>
                <p>Price: ₹{item.Price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <p>Total: ₹{item.Price * item.quantity}</p>
                <button
                  className="remove-button"
                  onClick={() => removeProduct(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="price-details-card">
        <h3>Price Details</h3>
        <p className="price-item">
          <span>Price ({products.length} items):</span>{" "}
          <span>₹{totalPrice}</span>
        </p>
        <p className="price-item">
          <span>Discount:</span> <span>- ₹{totalDiscount}</span>
        </p>
        <p className="price-item">
          <span>Delivery Charges:</span> <span>Free</span>
        </p>
        <hr />
        <p className="total-amount">
          <span>Total Amount:</span> <span>₹{finalAmount}</span>
        </p>
        <button className="place-order">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
