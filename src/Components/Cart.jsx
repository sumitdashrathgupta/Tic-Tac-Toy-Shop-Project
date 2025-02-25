import React, { useState, useEffect } from 'react';
import Products_Item from '../assets/Products_Item';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCartCount } from '../redux/Slice'; 

const Cart = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  let { Cartid } = useParams();

  useEffect(() => {
    if (Cartid && Products_Item[Cartid]) {
      const selectedProduct = { ...Products_Item[Cartid], quantity: 1 };
      setProducts((prevProducts) => {
        const existingProduct = prevProducts.find((item) => item.id === selectedProduct.id);

        let updatedCart;
        if (existingProduct) {
          updatedCart = prevProducts.map((item) =>
            item.id === selectedProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedCart = [...prevProducts, selectedProduct];
        }
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        dispatch(updateCartCount(updatedCart.length));

        return updatedCart;
      });
    }
  }, [Cartid, dispatch]);

  const updateCart = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));

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

  return (
    <div>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        products.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.Title}</h3>
            <img src={item.Image} alt={item.Title} width="150" />
            <p>Price: ₹{item.Price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ₹{item.Price * item.quantity}</p>
            <div>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => removeProduct(item.id)}>🗑️ Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
